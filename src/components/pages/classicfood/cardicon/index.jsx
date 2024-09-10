import React from "react";
import { IoCartOutline } from "react-icons/io5";
import "./cardicon.scss";
import { Link } from "react-router-dom";
export default function CardIcon() {
    const cartCount = JSON.parse(localStorage.getItem("CartData"));
    

    return (
        <div className="cardicon">
            <Link to="/cart">
                <IoCartOutline className="icon" />
                <div className="cart-count">{cartCount.length}</div>
            </Link>
        </div>
    );
}
