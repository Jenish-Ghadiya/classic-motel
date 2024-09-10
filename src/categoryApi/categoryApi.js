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

// import AvocadoToast from "../assets/images/food/BreakFast/australia/avocado-toast.jpg";
// import BagelsWithLox from "../assets/images/food/BreakFast/usa/bagels-with-lox.jpg";
// import BanhMi from "../assets/images/food/BreakFast/vietnam/banh-mi.jpeg";
// import Golgappa from "../assets/images/food/BreakFast/india/golgappa.jpeg";
// import Congee from "../assets/images/food/BreakFast/china/congee.webp";
// import HotTea from "../assets/images/food/BreakFast/tea/cup-of-hot-tea.webp";
// import DimSum from "../assets/images/food/BreakFast/china/dim-sum.jpeg";
// import Chilaquiles from "../assets/images/food/BreakFast/france/chilaquiles.webp";
// import FrenchToast from "../assets/images/food/BreakFast/french-toast.jpg";
// import GreekYogurt from "../assets/images/food/BreakFast/greece/greek-yogurt-with-honey-and-nuts.jpg";
// import Muesli from "../assets/images/food/BreakFast/muesli-recipe.jpg";
// import PancakesMapleSyrup from "../assets/images/food/BreakFast/canada/pancakes-with-maple-syrup.jpeg";
// import PancitCanton from "../assets/images/food/BreakFast/philippines/pancit-canton.jpg";
// import Photo from "../assets/images/food/BreakFast/photo.jpeg";
// import Shakshuka from "../assets/images/food/BreakFast/israel/shakshuka.jpg";
// import Tamales from "../assets/images/food/BreakFast/mexico/tamales.avif";

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
                        objectId: "23d-3e35-2w9f-4fr5-001",
                        Foodname: "Classic Pizza",
                        img: Classicpizza,
                        price: "$12",
                        details: [
                            { type: "Main Course, Italian" },
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
                            { type: "Fast Food, Snacks" },
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
                            { type: "Snacks, Fusion" },
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
                            { type: "Snacks, Wrap" },
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
                            { type: "Snacks, Dumplings" },
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
                            { type: "Main Course, Rice Dish" },
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
                            { type: "Main Course, Vegetarian" },
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
                            { type: "Dessert, Sweet" },
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
                                type: "Beverage",
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
                                type: "Snacks, Main Course",
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
                                type: "Main Course, Rice Dish",
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
                                type: "Main Course, Snacks",
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
                                type: "Street Food",
                            },
                            {
                                country: "Turkey",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-016",
                        foodName: "Lox and Bagels",
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
                        foodName: "Coffee",
                        img: Coffee,
                        price: "$15",
                        details: [
                            {
                                type: "Beverage",
                            },
                            {
                                country: "Global",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        foodName: "Masala Chai Copy",
                        img: MasalaChaiCopy,
                        price: "$10",
                        details: [
                            {
                                type: "Beverage",
                            },
                            {
                                country: "India",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        foodName: "Tosti",
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
                        foodName: "Turkish Egg with Butter",
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
                        foodName: "Zopf",
                        img: Zopf,
                        price: "$45",
                        details: [
                            {
                                type: "Bread",
                            },
                            {
                                country: "Switzerland",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    // {
                    //     foodName: "Avocado Toast",
                    //     img: AvocadoToast,
                    //     price: "$120",
                    //     details: {
                    //         type: "Healthy, Breakfast",
                    //         country: "Australia",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Bagels with Lox",
                    //     img: BagelsWithLox,
                    //     price: "$220",
                    //     details: {
                    //         type: "Breakfast, Snacks",
                    //         country: "USA",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Bánh Mì",
                    //     img: BanhMi,
                    //     price: "$90",
                    //     details: {
                    //         type: "Street Food, Sandwich",
                    //         country: "Vietnam",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Golgappa",
                    //     img: Golgappa,
                    //     price: "$40",
                    //     details: {
                    //         type: "Snacks, Street Food",
                    //         country: "India",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Congee",
                    //     img: Congee,
                    //     price: "$70",
                    //     details: {
                    //         type: "Breakfast, Porridge",
                    //         country: "China",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Dim Sum",
                    //     img: DimSum,
                    //     price: "$110",
                    //     details: {
                    //         type: "Snacks, Dumplings",
                    //         country: "China",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Chilaquiles",
                    //     img: Chilaquiles,
                    //     price: "$100",
                    //     details: {
                    //         type: "Breakfast, Main Course",
                    //         country: "Mexico",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "French Toast",
                    //     img: FrenchToast,
                    //     price: "$80",
                    //     details: {
                    //         type: "Breakfast, Snack",
                    //         country: "France",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Greek Yogurt with Honey and Nuts",
                    //     img: GreekYogurt,
                    //     price: "$85",
                    //     details: {
                    //         type: "Dessert, Healthy",
                    //         country: "Greece",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Muesli",
                    //     img: Muesli,
                    //     price: "$50",
                    //     details: {
                    //         type: "Breakfast, Healthy",
                    //         country: "Switzerland",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Pancakes with Maple Syrup",
                    //     img: PancakesMapleSyrup,
                    //     price: "$95",
                    //     details: {
                    //         type: "Breakfast, Dessert",
                    //         country: "Canada",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Pancit Canton",
                    //     img: PancitCanton,
                    //     price: "$85",
                    //     details: {
                    //         type: "Main Course, Noodles",
                    //         country: "Philippines",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Photo",
                    //     img: Photo,
                    //     price: "$65",
                    //     details: {
                    //         type: "Dessert, Drink",
                    //         country: "Unknown",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Shakshuka",
                    //     img: Shakshuka,
                    //     price: "$100",
                    //     details: {
                    //         type: "Main Course, Breakfast",
                    //         country: "Israel",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Tamales",
                    //     img: Tamales,
                    //     price: "$90",
                    //     details: {
                    //         type: "Snacks, Main Course",
                    //         country: "Mexico",
                    //     },
                    //     btn: "Add To Cart",
                    // }
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
