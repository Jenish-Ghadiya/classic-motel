import React from "react";
import "./error.scss";
function Error() {
    return (
        <div class="error-wrapper">
            <div class="glitch-wrapper">
                <div class="glitch" data-glitch="404">
                    404
                </div>
            </div>
            <div className="error-page-not-found">
                <p>PAGE NOT FOUND</p>
            </div>
        </div>
    );
}

export default Error;
