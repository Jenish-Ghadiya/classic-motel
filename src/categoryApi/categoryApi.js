
import { FaCaretDown } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const categoryApi = [
    {
        category: "HOME",
        path: "/",
        product: []
    },
    {
        category: "ROOMS",
        icon:FaAngleDown,
        micon:FaCaretDown,
        path: "/rooms",
        product: []
    },
    {
        category: "PAGES",
        icon:FaAngleDown,
        micon:FaCaretDown,
        path: "/pages",
        product: []
    },
    {
        category: "BLOG",
        path: "/blogs",
        product: []
    }
]
export default categoryApi;