import React from "react";
import "./header.scss";
import categoryApi from "../../categoryApi/categoryApi";


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
                            Tel : +91 9898 14 4191
                        </span>
                        <div className="header-enqury-btn">
                            <button>Enquire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
