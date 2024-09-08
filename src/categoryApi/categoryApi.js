import { FaCaretDown } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

import Burger from "../assets/images/food/Burger.jpg";
import Biriyani from "../assets/images/food/birayani.webp";
import chole from "../assets/images/food/chole.jpeg";
import Classicpizza from "../assets/images/food/classic-cheese-pizza.jpg";
import Dhosapizza from "../assets/images/food/Dhosapizza.webp";
import Franki from "../assets/images/food/franki.jpeg";
import Jalebi from "../assets/images/food/jalebifafada.jpeg";
import Momos from "../assets/images/food/momos.jpeg";

const categoryApi = [
    {
        category: "HOME",
        path: "/",
        product: [],
    },
    {
        category: "ROOMS",
        icon: FaAngleDown,
        micon: FaCaretDown,
        path: "/rooms",
        product: [],
    },
    {
        category: "PAGES",
        icon: FaAngleDown,
        micon: FaCaretDown,
        path: "/pages",
        subPages: [
            {
                name: "Classic Food",
                path: "/food",
                product: [
                    {
                        Foodname: "Classic Pizza",
                        img: Classicpizza,
                        price: "$200",
                        detail: [
                            {
                                tyape: "Snacks, Beverages, Desserts",
                            },
                            {
                                country: "Chhindwara City",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        Foodname: "Burger",
                        img: Burger,
                        price: "$200",
                        detail: [
                            {
                                tyape: "Snacks, Beverages, Desserts",
                            },
                            {
                                country: "Chhindwara City",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        Foodname: "Dhosapizza",
                        img: Dhosapizza,
                        price: "$200",
                        detail: [
                            {
                                tyape: "Snacks, Beverages, Desserts",
                            },
                            {
                                country: "Chhindwara City",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        Foodname: "Franki",
                        img: Franki,
                        price: "$200",
                        detail: [
                            {
                                tyape: "Snacks, Beverages, Desserts",
                            },
                            {
                                country: "Chhindwara City",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        Foodname: "Momos",
                        img: Momos,
                        price: "$200",
                        detail: [
                            {
                                tyape: "Snacks, Beverages, Desserts",
                            },
                            {
                                country: "Chhindwara City",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        Foodname: "Biriyani",
                        img: Biriyani,
                        price: "$200",
                        detail: [
                            {
                                tyape: "Snacks, Beverages, Desserts",
                            },
                            {
                                country: "Chhindwara City",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        Foodname: "Chole",
                        img: chole,
                        price: "$200",
                        detail: [
                            {
                                tyape: "Snacks, Beverages, Desserts",
                            },
                            {
                                country: "Chhindwara City",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        Foodname: "Jalebi",
                        img: Jalebi,
                        price: "$200",
                        detail: [
                            {
                                tyape: "Snacks, Beverages, Desserts",
                            },
                            {
                                country: "Chhindwara City",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                ],
            },
        ],
    },
    {
        category: "BLOG",
        path: "/blog",
        product: [],
    },
];
export default categoryApi;
