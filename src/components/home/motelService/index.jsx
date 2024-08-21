import React  from "react";
import "./motelService.scss";
import Iimgone from "../../../assets/icons/car-svgrepo-com.svg";
import Iimgtwo from "../../../assets/icons/hand-stars-svgrepo-com.svg";
import Iimgthree from "../../../assets/icons/wifi-svgrepo-com.svg";
import Iimgfour from "../../../assets/icons/laundry-washer-svgrepo-com.svg";
import Iimgfive from "../../../assets/icons/breakfast-svgrepo-com.svg";
import Iimgsix from "../../../assets/icons/parking-garage-transportation-car-parking-svgrepo-com.svg";
import Iimgseven from "../../../assets/icons/fitness-gym-svgrepo-com.svg";
import Iimgeight from "../../../assets/icons/pool-2-svgrepo-com.svg";
import Iimgnine from "../../../assets/icons/massage-spa-svgrepo-com.svg";
export default function Motelservices(){
    return(
        <div className="motelservices">
            <div className="container">
                <div className="motelservices-title">
                    <span>DISCOVER OUR SERVICES & FACILITIES</span>
                    <h3>All the Essentials for a Cozy and Comfortable Stay</h3>
                    <p>State-of-the-art amenities include a dramatic double-story loft lounge, 
                        spectacular rooftop lounge, Technogym fitness center, media corner, and 
                        a gracious 24/7 resident services team.</p>
                </div>
                <div className="motelservices-grid">
                    <div className="motelservices-card">
                        <div className="motelservices-img">
                            <img src={Iimgone}/>
                        </div>
                        <div className="motelservices-card-detail">
                            <h4>Airport Pick-up Service</h4>  
                            <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                    </div>
                    <div className="motelservices-card">
                        <div className="motelservices-img">
                            <img src={Iimgtwo}/>
                        </div>
                        <div className="motelservices-card-detail">
                            <h4>Airport Pick-up Service</h4>  
                            <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                    </div>
                    <div className="motelservices-card">
                        <div className="motelservices-img">
                            <img src={Iimgthree}/>
                        </div>
                        <div className="motelservices-card-detail">
                            <h4>Airport Pick-up Service</h4>  
                            <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                    </div>
                    <div className="motelservices-card">
                        <div className="motelservices-img">
                            <img src={Iimgfour}/>
                        </div>
                        <div className="motelservices-card-detail">
                            <h4>Airport Pick-up Service</h4>  
                            <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                    </div>
                    <div className="motelservices-card">
                        <div className="motelservices-img">
                            <img src={Iimgfive}/>
                        </div>
                        <div className="motelservices-card-detail">
                            <h4>Airport Pick-up Service</h4>  
                            <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                    </div>
                    <div className="motelservices-card">
                        <div className="motelservices-img">
                            <img src={Iimgsix}/>
                        </div>
                        <div className="motelservices-card-detail">
                            <h4>Airport Pick-up Service</h4>  
                            <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                    </div>
                    <div className="motelservices-card">
                        <div className="motelservices-img">
                            <img src={Iimgseven}/>
                        </div>
                        <div className="motelservices-card-detail">
                            <h4>Airport Pick-up Service</h4>  
                            <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                    </div>
                    <div className="motelservices-card">
                        <div className="motelservices-img">
                            <img src={Iimgeight}/>
                        </div>
                        <div className="motelservices-card-detail">
                            <h4>Airport Pick-up Service</h4>  
                            <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                    </div>
                    <div className="motelservices-card">
                        <div className="motelservices-img">
                            <img src={Iimgnine}/>
                        </div>
                        <div className="motelservices-card-detail">
                            <h4>Airport Pick-up Service</h4>  
                            <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}