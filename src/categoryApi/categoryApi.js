// import { v4 as uuidv4 } from 'uuid';

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
import MasalaTea from "../assets/images/food/BreakFast/masala-chai1.jpg";
import AcaiBowl from "../assets/images/food/BreakFast/Açai Bowl brazil.jpg";
import Arepas from "../assets/images/food/BreakFast/Arepas colombia.jpg";
import Idli from "../assets/images/food/BreakFast/Idali.jpg";
import Kedgeree from "../assets/images/food/BreakFast/Kedgeree scotland.jpg";
import Khachapuri from "../assets/images/food/BreakFast/Khachapuri (Georgia).webp";
import Kumpir from "../assets/images/food/BreakFast/Kumpir tuerky.jpg";
import LoxAndBagels from "../assets/images/food/BreakFast/Lox and Bagels (USA).jpeg";
import Coffee from "../assets/images/food/BreakFast/cofee.avif";
import MasalaChaiCopy from "../assets/images/food/BreakFast/masala-chai1.jpg";
import Tosti from "../assets/images/food/BreakFast/Tosti (Netherlands).jpg";
import TurkishEggs from "../assets/images/food/BreakFast/turkis egg with butter.jpg";
import Zopf from "../assets/images/food/BreakFast/zopf switzarland.jpeg";
import AvocadoToast from "../assets/images/food/BreakFast/avocado tost aus.jpg";
import BagelsWithLox from "../assets/images/food/BreakFast/Bagels with Lox US.jpg";
import CinnamonToast from "../assets/images/Lunch/Honeytoast.avif"
import Salad from "../assets/images/Lunch/Salad.avif"
import Fries from "../assets/images/Dinner/Frieswithsouse.avif"
import Salmon from "../assets/images/Dinner/salmon and zucchini.jpg"


import Blogspa from "../assets/images/blog/Spa.jpg";
import Dining from "../assets/images/blog/dinig.jpg";
import Room from "../assets/images/blog/Rooms.jpg";

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
                id: 1,
                date: "MAY 16",
                category: "NEWS · DINING",
                image: Dining,
                name: "Classic Food",
                path: "/food",
                product: [
                    {
                        objectId: "23d-3e35-2w9f-4fr5-001",
                        Foodname: "Classic Pizza",
                        img: Classicpizza,
                        price: "$12",
                        details: [
                            { type: "Lunch, Dinner, Italian" },
                            { country: "Italy" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-002",
                        Foodname: "Burger",
                        img: Burger,
                        price: "$8",
                        details: [
                            { type: "Lunch, Snacks" },
                            { country: "USA" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-003",
                        Foodname: "Dhosapizza",
                        img: Dhosapizza,
                        price: "$10",
                        details: [
                            { type: "Snacks,Dinner" },
                            { country: "India" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-004",
                        Foodname: "Franki",
                        img: Franki,
                        price: "$5",
                        details: [
                            { type: "Snacks, Lunch" },
                            { country: "India" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-005",
                        Foodname: "Momos",
                        img: Momos,
                        price: "$4",
                        details: [
                            { type: "Snacks, Lunch" },
                            { country: "Nepal" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-006",
                        Foodname: "Biriyani",
                        img: Biriyani,
                        price: "$15",
                        details: [
                            { type: "Main Course, Dinner" },
                            { country: "India" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-007",
                        Foodname: "Chole",
                        img: chole,
                        price: "$6",
                        details: [
                            { type: "Lunch, Vegetarian" },
                            { country: "India" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-008",
                        Foodname: "Jalebi",
                        img: Jalebi,
                        price: "$3",
                        details: [
                            { type: "Dessert, Sweet, Breakfast" },
                            { country: "India" },
                        ],
                        btn: "Add To Cart",
                    },
                    ,
                    {
                        objectId: "23d-3e35-2w9f-4fr5-009",
                        Foodname: "Masala Tea",
                        img: MasalaTea,
                        price: "$10",
                        details: [
                            {
                                type: "Breakfast, Snacks, Healthy",
                            },
                            {
                                country: "India",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-010",
                        Foodname: "Açai Bowl",
                        img: AcaiBowl,
                        price: "$150",
                        details: [
                            {
                                type: "Breakfast, Healthy",
                            },
                            {
                                country: "Brazil",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-011",
                        Foodname: "Arepas",
                        img: Arepas,
                        price: "$100",
                        details: [
                            {
                                type: "Dinner, Main Course",
                            },
                            {
                                country: "Colombia",
                            },
                        ],

                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-012",
                        Foodname: "Idli",
                        img: Idli,
                        price: "$50",
                        details: [
                            {
                                type: "Breakfast, Snacks",
                            },
                            {
                                country: "India",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-013",
                        Foodname: "Kedgeree",
                        img: Kedgeree,
                        price: "$180",

                        details: [
                            {
                                type: "Dinner, Rice Dish",
                            },
                            {
                                country: "Scotland",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-014",
                        Foodname: "Khachapuri",
                        img: Khachapuri,
                        price: "$120",
                        details: [
                            {
                                type: "Dinner, Snacks",
                            },
                            {
                                country: "Georgia",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-015",
                        Foodname: "Kumpir",
                        img: Kumpir,
                        price: "$90",
                        details: [
                            {
                                type: "Lunch, Vegetarian",
                            },
                            {
                                country: "Turkey",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-016",
                        Foodname: "Lox and Bagels",
                        img: LoxAndBagels,
                        price: "$220",
                        details: [
                            {
                                type: "Breakfast, Snacks",
                            },
                            {
                                country: "USA",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-017",
                        Foodname: "Coffee",
                        img: Coffee,
                        price: "$15",
                        details: [
                            {
                                type: "Breakfast, Beverage",
                            },
                            {
                                country: "Global",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-018",
                        Foodname: "Salad",
                        img: Salad,
                        price: "$10",
                        details: [
                            {
                                type: "Lunch",
                            },
                            {
                                country: "Australia",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-019",
                        Foodname: "Tosti",
                        img: Tosti,
                        price: "$60",
                        details: [
                            {
                                type: "Snack, Breakfast",
                            },
                            {
                                country: "Netherlands",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-020",
                        Foodname: "Turkish Egg with Butter",
                        img: TurkishEggs,
                        price: "$80",
                        details: [
                            {
                                type: "Breakfast",
                            },
                            {
                                country: "Turkey",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-021",
                        Foodname: "Zopf",
                        img: Zopf,
                        price: "$45",
                        details: [
                            {
                                type: "Breakfast, Bread",
                            },
                            {
                                country: "Switzerland",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-022",
                        Foodname: "Avocado Toast",
                        img: AvocadoToast,
                        price: "$120",
                        details: [
                            { type: "Healthy, Breakfast" },
                            { country: "Australia" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-023",
                        Foodname: "Bagels with Lox",
                        img: BagelsWithLox,
                        price: "$220",
                        details: [
                            { type: "Breakfast, Snacks" },
                            { country: "USA" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-024",
                        Foodname: "Cinnamon Toast",
                        img: CinnamonToast,
                        price: "$120",
                        details: [
                            { type: "Lunch" },
                            { country: "Australia" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-025",
                        Foodname: "French Fries",
                        img: Fries,
                        price: "$10",
                        details: [
                            { type: "Dinner" },
                            { country: "USA" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-026",
                        Foodname: "Salmon",
                        img: Salmon,
                        price: "$30",
                        details: [
                            { type: "Dinner" },
                            { country: "USA" },
                        ],
                        btn: "Add To Cart",
                    }
                    
                ],
            },
            {
                id: 2,
                date: "MAY 16",
                category: "NEWS · SPA",
                image: Blogspa,
                name: "Spa And Wellness",
                path: "/food",
            },
            {
                id: 3,
                date: "MAY 16",
                category: "NEWS · WELLNESS",
                image: Room,
                name: "Gym & Wellness",
                path: "/food",
            }

        ],
    },
    {
        category: "BLOG",
        path: "/blog",
        blogPosts: [
            {
                id: 1,
                img: Blogspa,
                title: "Relaxing Spa Treatments",
                date: "August 20, 2024",
                excerpt:
                    "Discover the best spa treatments to rejuvenate your body and mind at Classic Motel.",
                link: "/blog",
            },
            {
                id: 2,
                img: Dining,
                title: "Gourmet Dining Experience",
                date: "July 15, 2024",
                excerpt:
                    "Explore our gourmet dining options, perfect for every palate.",
                link: "/food",
            },
            {
                id: 3,
                img: Room,
                title: "Luxury Room Bookings",
                date: "June 30, 2024",
                excerpt:
                    "Book your stay at Classic Motel and enjoy luxurious accommodations.",
                link: "/blog",
            },
        ],
    },
];
export default categoryApi;
