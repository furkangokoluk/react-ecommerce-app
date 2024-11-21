import React, { useEffect, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../css/ProductDetail.css";
import { addToBasket, calculateBasket } from "../redux/slices/BasketSlice";
import { setSelectedProduct } from "../redux/slices/ProductSlice";

function ProductDetail() {

    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)
    const { price, image, title, description } = selectedProduct;
    const [count, setCount] = useState(0);
    const { basketProducts } = useSelector((store) => store.basket)

    const dispatch = useDispatch();

    useEffect(() => {
        getProductById();
        getBasketProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })
    }

    const getBasketProductById = () => {
        basketProducts && basketProducts.map((basketProduct) => {
            if (basketProduct.id == id) {
                setCount(basketProduct.count)
            }
        })
    }



    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            title,
            description,
            count,
            image
        }

        dispatch(addToBasket(payload));
        dispatch(calculateBasket())
    }
    return (
        <div style={{ marginTop: "30px", display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{ marginRight: "30px" }}>
                <img src={image} width={300} height={500} />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <h1 style={{ textAlign: "end" }}>{price} ₺</h1>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                    <CiCirclePlus className="icon" onClick={increment} />
                    <span style={{ fontSize: '35px', margin: '5px' }}>{count}</span>
                    <CiCircleMinus className="icon" onClick={count > 0 ? decrement : null} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                    <button onClick={addBasket} className="bskt-add-btn">Sepete Ekle</button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail;
