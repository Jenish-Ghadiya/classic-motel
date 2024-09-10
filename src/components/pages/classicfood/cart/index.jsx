import React, { useEffect } from "react";
import "./cart.scss";
import categoryApi from "../../../../categoryApi/categoryApi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function Cart() {
    const cartData = JSON.parse(localStorage.getItem("CartData")) || [];
    const products = categoryApi[2].subPages[0].product;

    const data = products.filter((item) =>cartData.includes(item.objectId));
    
    const navigate = useNavigate();
    const handelGoBack = () => {
        const scrollPosition = sessionStorage.getItem("scrollPosition");
        navigate(-1);
        if (scrollPosition) {
            setTimeout(() => {
                window.scrollTo(0, parseInt(scrollPosition, 10));
            }, 0); // Restore scroll position after navigation
        }
    };

    const handleRemove = (id) => {
        // const cartData = JSON.parse(localStorage.getItem("CartData")) || [];

        cartData.splice(id, 1);
        const newCartData = cartData;
        localStorage.setItem("CartData", JSON.stringify(newCartData));
        window.location.reload();
    };

    return (
        <div className="cart">
            <div className="container">
                {cartData.length === 0 ? (
                    <div className="cart-empty">
                        <h3>Cart is Empty</h3>
                        <p>Go back</p>
                        <div
                            className="food-detail-back"
                            onClick={handelGoBack}
                        >
                            <button>
                                <IoMdArrowRoundBack className="back-icon" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="cart-title">
                            <h1>Foods Cart</h1>
                        </div>
                        <div className="cart-detail-grid">
                            {data.map((item, i) => (
                                <>
                                    <div className="cart-detail-img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="cart-detail-info">
                                        <h5>{item.Foodname}</h5>
                                        <p className="price">
                                            <span>Price:</span>
                                            {item.price}
                                        </p>
                                        <div className="cart-detail-other-info">
                                            <p>{item.details[0].type}</p>
                                            <p>{item.details[1].country}</p>
                                        </div>
                                        <div className="cart-detail-btn">
                                            <button>Order Now</button>
                                            <button
                                                onClick={() => handleRemove(i)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
