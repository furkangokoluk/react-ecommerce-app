import React from "react";
import { useNavigate } from 'react-router-dom';
import '../css/product.css';

function Product({ product }) {

    const { id, price, image, title, description } = product;

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate("/product-details/" + id)} className="card">
            <img className="image" src={image}/>
            <div>
                <p style={{ textAlign: "center", height: "55px" }}>{title}</p>
                <h3 style={{ textAlign: "end" }}>{price} ₺</h3>
            </div>
            <div className="flex-row">
            </div>
        </div>
    );
}

export default Product;
