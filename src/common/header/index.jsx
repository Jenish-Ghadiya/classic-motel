import React from "react";
import "./header.scss";
import categoryApi from "../../categoryApi/categoryApi";
import { Link } from "react-router-dom";


function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="header-flex">
                    <div className="header-logo">
                        <p>CLASSIC MOTEL</p>
                    </div>
                    <div className="header-items">
                        
                        {categoryApi.map((item) => (
                            <div className="header-item-flex">
                                <span>
                                    {item.category}
                                    <div className="border"></div>
                                </span>
                                <item.icon className="down-icon"/>
                            </div>
                        ))}
                        <span className="header-tel">
                            Tel : +91 9898 77 8888
                        </span>
                        <div className="header-enqury-btn">
                            <Link to="/login"><button>Enquire Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
