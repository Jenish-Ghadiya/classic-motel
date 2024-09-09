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
// import Kumpir from "../assets/images/food/BreakFast/turkey/kumpir.jpg";
// import LoxAndBagels from "../assets/images/food/BreakFast/usa/lox-and-bagels.jpeg";
// import Coffee from "../assets/images/food/BreakFast/coffee.avif";
// import MasalaChaiCopy from "../assets/images/food/BreakFast/india/top-view-indian-masala-chai-copy.webp";
// import Tosti from "../assets/images/food/BreakFast/netherlands/tosti.jpg";
// import TurkishEggs from "../assets/images/food/BreakFast/turkey/turkish-eggs-with-butter.jpg";
// import Zopf from "../assets/images/food/BreakFast/switzerland/zopf.jpeg";

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
                        Foodname: "Classic Pizza",
                        img: Classicpizza,
                        price: "$200",
                        details: [
                            {
                                type: "Snacks, Beverages, Desserts",
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
                        details: [
                            {
                                type: "Snacks, Beverages, Desserts",
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
                        details: [
                            {
                                type: "Snacks, Beverages, Desserts",
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
                        details: [
                            {
                                type: "Snacks, Beverages, Desserts",
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
                        details: [
                            {
                                type: "Snacks, Beverages, Desserts",
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
                        details: [
                            {
                                type: "Snacks, Beverages, Desserts",
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
                        details: [
                            {
                                type: "Snacks, Beverages, Desserts",
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
                        details: [
                            {
                                type: "Snacks, Beverages, Desserts",
                            },
                            {
                                country: "Chhindwara City",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
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
                    // {
                    //     Foodname: "Kumpir",
                    //     img: Kumpir,
                    //     price: "$90",
                    //     details: {
                    //         type: "Street Food",
                    //         country: "Turkey",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Lox and Bagels",
                    //     img: LoxAndBagels,
                    //     price: "$220",
                    //     details: {
                    //         type: "Breakfast, Snacks",
                    //         country: "USA",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Coffee",
                    //     img: Coffee,
                    //     price: "$15",
                    //     details: {
                    //         type: "Beverage",
                    //         country: "Global",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Masala Chai Copy",
                    //     img: MasalaChaiCopy,
                    //     price: "$10",
                    //     details: {
                    //         type: "Beverage",
                    //         country: "India",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Tosti",
                    //     img: Tosti,
                    //     price: "$60",
                    //     details: {
                    //         type: "Snack, Breakfast",
                    //         country: "Netherlands",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Turkish Egg with Butter",
                    //     img: TurkishEggs,
                    //     price: "$80",
                    //     details: {
                    //         type: "Breakfast",
                    //         country: "Turkey",
                    //     },
                    //     btn: "Add To Cart",
                    // },
                    // {
                    //     foodName: "Zopf",
                    //     img: Zopf,
                    //     price: "$45",
                    //     details: {
                    //         type: "Bread",
                    //         country: "Switzerland",
                    //     },
                    //     btn: "Add To Cart",
                    // },
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
