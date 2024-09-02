import React, { useState } from "react";
import "./breakfast.scss";

import { FaSearch } from "react-icons/fa";
import categoryApi from "../../../../categoryApi/categoryApi";
function Breakfast() {

    const Breakfast = categoryApi[2].subcategory[0].foodproduct;
    const [search, setSearch] = useState("");

    const handleOnChange = (e) => {
        setSearch(e.target.value);
    };

    const Data = Breakfast.filter(
        (product) =>
            product.name.toUpperCase().includes(search.toUpperCase()) ||
            product.category.toUpperCase().includes(search.toUpperCase())
    );
    return (
        <div className="container">
            <div className="heading">
                <h1>Search Functionality</h1>
            </div>
            <div className="search-bar">
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={handleOnChange}
                />
            </div>
            <div className="main">
                {Data.length > 0 ? (
                    Data.map((data, i) => (
                        <div key={i} className="card">
                            <div className="img"></div>
                            <h3>{data.name}</h3>
                            <h4>{data.price}</h4>
                            <h4>{data.discount}</h4>
                            <h4>{data.category}</h4>
                            <h4>{data.availability}</h4>
                        </div>
                    ))
                ) : (
                    <h1>No Data</h1>
                )}
            </div>
        </div>
    );
}

export default Breakfast;

