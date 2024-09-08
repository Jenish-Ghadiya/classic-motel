import React from "react";
import "./blog.scss";
import { Link } from "react-router-dom";
import Timer from "../../common/loader/loadertimer";

const blogPosts = [
    {
        id: 1,
        title: "Relaxing Spa Treatments",
        date: "August 20, 2024",
        excerpt:
            "Discover the best spa treatments to rejuvenate your body and mind at Classic Motel.",
        image: "spa.jpg",
        link: "/blog/spa-treatments",
    },
    {
        id: 2,
        title: "Gourmet Dining Experience",
        date: "July 15, 2024",
        excerpt:
            "Explore our gourmet dining options, perfect for every palate.",
        image: "dining.jpg",
        link: "/blog/gourmet-dining",
    },
    {
        id: 3,
        title: "Luxury Room Bookings",
        date: "June 30, 2024",
        excerpt:
            "Book your stay at Classic Motel and enjoy luxurious accommodations.",
        image: "room.jpg",
        link: "/blog/room-booking",
    },
];

function Blog() {
    return (
        <Timer>
            <div className="blog-container">
                <h1>Our Blog</h1>
                <div className="blog-posts">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="blog-post">
                            <img
                                src={`/images/${post.image}`}
                                alt={post.title}
                            />
                            <div className="blog-content">
                                <h2>{post.title}</h2>
                                <p className="date">{post.date}</p>
                                <p>{post.excerpt}</p>
                                <Link to={post.link} className="read-more">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Timer>
    );
}

export default Blog;
