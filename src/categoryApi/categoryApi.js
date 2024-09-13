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
import BanhMi from "../assets/images/food/BreakFast/Bánh Mì vietnam.jpeg";
import Congee from "../assets/images/food/BreakFast/Congee china.webp";
import DimSum from "../assets/images/food/BreakFast/Dim_Sum_Trang china.jpg";
import FrenchToast from "../assets/images/food/BreakFast/French-Toast-1.jpg";
import GreekYogurt from "../assets/images/food/BreakFast/Greek Yogurt with Honey and Nuts greece.jpg";
import Muesli from "../assets/images/food/BreakFast/Muesli-Recipe-10.jpg";
import PancakesMapleSyrup from "../assets/images/food/BreakFast/Pancakes with Maple Syrup canada.jpeg";
import PancitCanton from "../assets/images/food/BreakFast/Pancit Canton (Philippines).jpg";
import Shakshuka from "../assets/images/food/BreakFast/Shakshuka iserail.jpg";
import Tamales from "../assets/images/food/BreakFast/Tamales mexico.avif";

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
                                type: "Beverage",
                            },
                            {
                                country: "Global",
                            },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-018",
                        Foodname: "Masala Chai Copy",
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
                                type: "Bread",
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
                        Foodname: "Bánh Mì",
                        img: BanhMi,
                        price: "$90",
                        details: [
                            { type: "Street Food, Sandwich" },
                            { country: "Vietnam" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-025",
                        Foodname: "Congee",
                        img: Congee,
                        price: "$70",
                        details: [
                            { type: "Breakfast, Porridge" },
                            { country: "China" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-026",
                        Foodname: "Dim Sum",
                        img: DimSum,
                        price: "$110",
                        details: [
                            { type: "Snacks, Dumplings" },
                            { country: "China" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-027",
                        Foodname: "French Toast",
                        img: FrenchToast,
                        price: "$80",
                        details: [
                            { type: "Breakfast, Snack" },
                            { country: "France" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-028",
                        Foodname: "Greek Yogurt with Honey and Nuts",
                        img: GreekYogurt,
                        price: "$85",
                        details: [
                            { type: "Dessert, Healthy" },
                            { country: "Greece" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-029",
                        Foodname: "Muesli",
                        img: Muesli,
                        price: "$50",
                        details: [
                            { type: "Breakfast, Healthy" },
                            { country: "Switzerland" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-030",
                        Foodname: "Pancakes with Maple Syrup",
                        img: PancakesMapleSyrup,
                        price: "$95",
                        details: [
                            { type: "Breakfast, Dessert" },
                            { country: "Canada" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-031",
                        Foodname: "Pancit Canton",
                        img: PancitCanton,
                        price: "$85",
                        details: [
                            { type: "Main Course, Noodles" },
                            { country: "Philippines" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-032",
                        Foodname: "Shakshuka",
                        img: Shakshuka,
                        price: "$100",
                        details: [
                            { type: "Main Course, Breakfast" },
                            { country: "Israel" },
                        ],
                        btn: "Add To Cart",
                    },
                    {
                        objectId: "23d-3e35-2w9f-4fr5-033",
                        Foodname: "Tamales",
                        img: Tamales,
                        price: "$90",
                        details: [
                            { type: "Snacks, Main Course" },
                            { country: "Mexico" },
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
