import { createSlice } from '@reduxjs/toolkit';

const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
}

const initialState = {
    basketProducts: getBasketFromStorage(),
    drawer: false,
    totalAmount: 0
}

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}

export const BasketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.basketProducts && state.basketProducts.find((product) => product.id === action.payload.id)
            if (findProduct) {
                // daha önceden eklenmiştir.
                const extractedProducts = state.basketProducts.filter((product) => product.id != action.payload.id);
                findProduct.count = action.payload.count;
                state.basketProducts = [...extractedProducts, findProduct];
                writeFromBasketToStorage(state.basketProducts)
            } else {
                // daha önceden eklenmemiştir.
                state.basketProducts = [...state.basketProducts, action.payload];
                writeFromBasketToStorage(state.basketProducts)
            }
        },

        setDrawer: (state) =>{
            state.drawer = !state.drawer
        },

        calculateBasket : (state) => {
            state.totalAmount = 0
            state.basketProducts && state.basketProducts.map((basketProduct) => {
                state.totalAmount += basketProduct.price * basketProduct.count ;
            })
        },

        deleteBasket: (state, action) => {
            const updatedBasket = state.basketProducts.filter(product => product.id !== action.payload.id);
            state.basketProducts = updatedBasket;
            writeFromBasketToStorage(updatedBasket);
        }
    }
})

export const { addToBasket, setDrawer,calculateBasket, deleteBasket } = BasketSlice.actions
export default BasketSlice.reducer