import { FaCaretDown } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

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
        subcategory: [
            {
                name: "Classic Food",
                foodproduct: [
                    {
                        name: "Apple",
                        price: 1000,
                        discount: 100,
                        category: "Fruit",
                        availability: true,
                    },
                    {
                        name: "Banana",
                        price: 2000,
                        discount: 100,
                        category: "Fruit",
                        availability: true,
                    },
                    {
                        name: "Orange",
                        price: 700,
                        discount: 140,
                        category: "Fruit",
                        availability: false,
                    },
                    {
                        name: "Strawberry",
                        price: 400,
                        discount: 60,
                        category: "Fruit",
                        availability: true,
                    },
                    {
                        name: "Broccoli",
                        price: 230,
                        discount: 69,
                        category: "Vegetable",
                        availability: true,
                    },
                    {
                        name: "Carrot",
                        price: 150,
                        discount: 15,
                        category: "Vegetable",
                        availability: true,
                    },
                    {
                        name: "Chicken Breast",
                        price: 500,
                        discount: 250,
                        category: "Meat",
                        availability: true,
                    },
                    {
                        name: "Salmon",
                        price: 820,
                        discount: 492,
                        category: "Fish",
                        availability: false,
                    },
                    {
                        name: "Almonds",
                        price: 1000,
                        discount: 800,
                        category: "Nuts",
                        availability: true,
                    },
                    {
                        name: "Yogurt",
                        price: 200,
                        discount: 40,
                        category: "Dairy",
                        availability: true,
                    },
                    {
                        name: "Milk",
                        price: 130,
                        discount: 13,
                        category: "Dairy",
                        availability: true,
                    },
                    {
                        name: "Eggs",
                        price: 300,
                        discount: 75,
                        category: "Dairy",
                        availability: false,
                    },
                    {
                        name: "Bread",
                        price: 250,
                        discount: 50,
                        category: "Bakery",
                        availability: true,
                    },
                    {
                        name: "Butter",
                        price: 400,
                        discount: 160,
                        category: "Dairy",
                        availability: true,
                    },
                    {
                        name: "Cheese",
                        price: 650,
                        discount: 325,
                        category: "Dairy",
                        availability: true,
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
