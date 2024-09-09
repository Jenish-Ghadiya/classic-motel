import React, { useEffect } from "react";
import "./Fooddetail.scss";
import categoryApi from "../../../../categoryApi/categoryApi";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function FoodDetail() {
    
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, [pathname]); // Run this effect when the pathname changes

    const getdata = JSON.parse(localStorage.getItem("foodindex"));

    const products = categoryApi[2].subPages[0].product;

    const data = products.filter(
        (item, i) => i === getdata  
    );

    const navigate = useNavigate()

    const handelGoBack = () => {
        const scrollPosition = sessionStorage.getItem("scrollPosition");
        navigate(-1);
        if (scrollPosition) {
            setTimeout(() => {
                window.scrollTo(0, parseInt(scrollPosition, 10));
            }, 0); // Restore scroll position after navigation
        }
    }

    return (
        <div className="food-detail">
            <div className="container">
                <div className="food-detail-back" onClick={handelGoBack}>
                    <button><IoMdArrowRoundBack  className="back-icon"/></button>
                </div>
                <div className="food-detail-grid">
                    {data.map((item, i) => (
                        <>
                            <div className="food-detail-img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="food-detail-info">
                                <h5>{item.Foodname}</h5>
                                <p className="price">
                                    <span>Price:</span>
                                    {item.price}
                                </p>
                                <div className="food-detail-other-info">
                                    <p>{item.details[0].type}</p>
                                    <p>{item.details[1].country}</p>
                                </div>
                                <div className="food-detail-btn">
                                    <button>{item.btn}</button>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}
