import React, { useState } from "react";
import "./header.scss";
import categoryApi from "../../categoryApi/categoryApi";
import { Link } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa6";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = () => {
        setIsNavOpen(true);
        document.body.style.overflowY = "hidden";
    };

    const closeNav = () => {
        setIsNavOpen(false);
        document.body.style.overflowY = "auto";
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <header>
            {/* <div className={`sidenav ${isNavOpen ? "open" : ""}`}>
                <div className="closebtn" onClick={closeNav}>
                    &times;
                </div>
                <Link className="menu-item" to={"/"}>
                    Home
                </Link>
                <div className="menu-item category" onClick={toggleDropdown}>
                    Category
                    <FaCaretDown />
                </div>
                <div
                    className={`dropdown-category ${
                        dropdownOpen ? "open" : ""
                    }`}
                >
                    {categoryApi.map((item, index) => {
                        return (
                            <Link to={item.path} key={index} onClick={closeNav}>
                                {item.category}
                            </Link>
                        );
                    })}
                </div>
                <Link className="menu-item" to={"/shop"} onClick={closeNav}>
                    Shop
                </Link>
                <Link className="menu-item" to={"/profile"} onClick={closeNav}>
                    Profile{" "}
                </Link>
            </div> */}
            <div className="header-container">
                <div className="header-flex">
                    <div className="header-logo">
                        <p>CLASSIC MOTEL</p>
                    </div>
                    <div className="header-items">
                        {categoryApi.map((item) => (
                            <div className="header-item-flex">
                                <Link to={item.path}>
                                    {item.category}
                                    <div className="border"></div>
                                </Link>
                                <item.icon className="down-icon" />
                            </div>
                        ))}
                        <span className="header-tel">
                            Tel : +1 9898 77 8888
                        </span>
                        <div className="header-enqury-btn">
                            <Link to="/login">
                                <button>Enquire Now</button>
                            </Link>
                        </div>
                        <div onClick={openNav} className="responsive-menu">
                            <AiOutlineMenuFold className="menu-icon" />
                        </div>
                    </div>
                </div>
            </div>
            
                <div  className={`menu ${isNavOpen ? "open" : ""}`}>
                    <div className="menu-header-flex">
                        <div className="menu-header-logo">
                            <p>MENU</p>
                        </div>
                        <div className="menu-header-close-btn" onClick={closeNav}>
                            <p>&times;</p>
                        </div>
                    </div>
                    <div
                        className="side-menu-item category"
                    >
                        {categoryApi[0].category}
                    </div>
                    <div
                        className="side-menu-item category"
                        onClick={toggleDropdown}
                    >
                        {categoryApi[1].category}
                        <FaCaretDown />
                    </div>
                    <div
                        className={`dropdown-category ${
                            dropdownOpen ? "open" : ""
                        }`}
                    >
                        {categoryApi.map((item, index) => {
                            return (
                                <Link to={item.path} key={index} onClick={closeNav}>
                                    {item.category}
                                </Link>
                            );
                        })}
                    </div>
                    <div
                        className="side-menu-item category"
                        onClick={toggleDropdown}
                    >
                        {categoryApi[2].category}
                        <FaCaretDown />
                    </div>
                    {/* <div
                        className={`dropdown-category ${
                            dropdownOpen ? "open" : ""
                        }`}
                    >
                        {categoryApi.map((item, index) => {
                            return (
                                <Link to={item.path} key={index} onClick={closeNav}>
                                    {item.category}
                                </Link>
                            );
                        })}
                    </div> */}
                    <div
                        className="side-menu-item category"
                    >
                        {categoryApi[3].category}
                    </div>
                    
                </div>
        </header>
    );
}

export default Header;
