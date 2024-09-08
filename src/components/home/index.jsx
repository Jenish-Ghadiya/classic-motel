import React from "react";
import Herobanner from "./herobanner";
import Motelservices from "./motelService";
import Outerview from "./outerview";
import Services from "./service";
import Timer from "../../common/loader/loadertimer";

function Home() {
    return (
        <div>
            <Timer>
                <Herobanner />
                <Outerview />
                <Services />
                <Motelservices />
            </Timer>
        </div>
    );
}

export default Home;
