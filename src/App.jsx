import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import "./styles/index.scss"
import { useEffect } from "react";
import kursor from "kursor";
import "kursor/dist/kursor.css"; 

function App() {
    useEffect(() => {
        // Remove any existing kursor elements before creating a new one
        const oldKursors = document.querySelectorAll('.kursor');
        oldKursors.forEach(el => el.remove());

        new kursor({ 
            type: 1,
            removeDefaultCursor: true,
        });

        // Cleanup: remove kursor elements on unmount
        return () => {
            const cursors = document.querySelectorAll('.kursor');
            cursors.forEach(el => el.remove());
        };
    }, []); 
    return (
        <>
            <RouterProvider router={router} />
            <Toaster position="top-right" reverseOrder={false} />
        </>
    );
}

export default App;
