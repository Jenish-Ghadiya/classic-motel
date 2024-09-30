import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./enquiry.scss";

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

export default function Enquiry() {
    const [position, setPosition] = useState([21.1702, 72.8311]); // Updated: Surat, Gujarat
    const [zoom, setZoom] = useState(13);

    return (
        <section className="enquiry-section">
            <div className="map-container">
                <MapContainer center={position} zoom={zoom}>
                    <ChangeView center={position} zoom={zoom} />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Surat, Gujrat'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            Surat, Gujarat
                        </Popup>
                    </Marker>
                    {/* Remove the location-buttons div */}
                </MapContainer>
            </div>
            <div className="enquiry">
                <div className="enquiry-container">
                    <div className="enquiry-image">
                    </div>
                    <div className="enquiry-content">
                        <h2>Contact Information</h2>
                        <div className="contact-details">
                            <p className="border-up">
                                Address: Skylight, Ayodhyachowk, Surat, Gujarat
                            </p>
                            <p className="border-up-down">Phone Number: +91 22 345 67 88</p>
                            <p className="border-down">Email: info@classicmotel.com</p>
                        </div>
                        <h3>Let's start a conversation</h3>
                        <form className="enquiry-form">
                            <input type="text" placeholder="Your name" />
                            <input type="email" placeholder="Your email" />
                            <input type="text" placeholder="Subject" />
                            <textarea placeholder="Your message"></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
