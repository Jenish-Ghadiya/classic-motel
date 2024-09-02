import { useParams } from "react-router-dom";
import Rooms from "../../components/rooms";
import Blog from "../../components/blog";
import ClassicFood from "../../components/pages/classicfood";
import Timer from "../../common/loader/loadertimer";
import Error from "../../common/error";

const Category = () => {
    const { category } = useParams();

    let content;
    switch (category) {
        case "rooms":
            content = (
                <Timer>
                    <Rooms />
                </Timer>
            );
            break;
        case "blog":
            content = (
                <Timer>
                    <Blog />
                </Timer>
            );
            break;
        case "pages":
            content = (
                <Timer>
                    <ClassicFood />
                </Timer>
            );
            break;
        default:
            content = <Error />;
    }

    return content;
};

export default Category;
