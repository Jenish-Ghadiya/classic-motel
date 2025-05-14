import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import "./styles/index.scss";
import AnimatedCursor from "react-animated-cursor";

function App() {
    const [showCursor, setShowCursor] = React.useState(true);

    React.useEffect(() => {
        // Hide cursor if touch is used
        const handleTouchStart = () => setShowCursor(false);
        // Show cursor if mouse is used
        const handleMouseMove = () => setShowCursor(true);

        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("mousemove", handleMouseMove);

        // Optionally: Start hidden if only touch is available
        if (
            "ontouchstart" in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0
        ) {
            setShowCursor(false);
        }

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            {showCursor && (
                <AnimatedCursor 
                    innerSize={20}
                    outerSize={40}
                    color="0,0,0"
                    outerAlpha={0}
                    innerScale={1}
                    outerScale={1.5}
                    hasBlendMode={true}
                    innerStyle={{
                        background: "linear-gradient(135deg, #e65100 0%, #388e3c 100%)",
                        mixBlendMode: "exclusion",
                    }}
                    outerStyle={{
                        border: "3px solid #689f38",
                        background: "transparent",
                        mixBlendMode: "exclusion",
                    }}
                />
            )}
            <RouterProvider router={router} />
            <Toaster position="top-right" reverseOrder={false} />
        </>
    );
}

export default App;
