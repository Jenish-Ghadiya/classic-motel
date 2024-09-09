import React from "react";import "./foods.scss";
import categoryApi from "../../../../categoryApi/categoryApi";
import { Link} from "react-router-dom";

export default function Foods() {

    const Food = categoryApi[2].subPages[0].product;


    const dataIndex = (i) => {
        localStorage.setItem("foodindex", i);
        sessionStorage.setItem("scrollPosition", window.pageYOffset); // Save current scroll position
    };

    return (
        <div className="foods">
            <div className="container">
                <div className="foodsearch-items">
                    <div className="foodsearch-bar">
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="foodsearch-item-btns">
                        <div className="foodsearch-item-btn">
                            <button>All</button>
                        </div>
                        <div className="foodsearch-item-btn">
                            <button>Breakfast</button>
                        </div>
                        <div className="foodsearch-item-btn">
                            <button>Lunch</button>
                        </div>
                        <div className="foodsearch-item-btn">
                            <button>Dinner</button>
                        </div>
                    </div>
                </div>
                <div className="foods-cards">
                    {Food.map((item, i) => (
                        <Link
                            className="card"
                            to="/fooddetail"
                            onClick={() => dataIndex(i)}
                        >
                            <div className="card-img">
                                <img src={item.img} />
                            </div>
                            <div className="card-detail">
                                <h5> {item.Foodname}</h5>
                                <p>{item.details[0].type}</p>
                                <p>{item.details[1].country}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
