import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slices/appSlice'
import basketSlice from './slices/BasketSlice'
import productSlice from './slices/ProductSlice'

export const store = configureStore({
  reducer: {
    app: appSlice,
    product: productSlice,
    basket: basketSlice
  },
})