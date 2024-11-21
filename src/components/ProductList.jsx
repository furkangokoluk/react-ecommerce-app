import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../redux/slices/ProductSlice";
import Product from "./Product";

function ProductList() {

    const dispatch = useDispatch();
    const {products} = useSelector((store) => store.product)

    useEffect(()=>{
        dispatch(getAllProduct())
    }, [])

    return (
    <div className="flex-row" style={{flexWrap:"wrap"}}>
      {
        products && products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default ProductList;
