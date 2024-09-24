import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import "./cardicon.scss";
import { Link } from "react-router-dom";
export default function CardIcon() {
    const [count, setCount] = useState(JSON.parse(localStorage.getItem("CartData")) )
    
    useEffect(() => {
        setCount(JSON.parse(localStorage.getItem("CartData")))
    }, [count])
    

    return (
        <div className="cardicon">
            <Link to="/cart">
                <IoCartOutline className="icon" />
                <div className="cart-count">{count.length}</div>
            </Link>
        </div>
    );
}
