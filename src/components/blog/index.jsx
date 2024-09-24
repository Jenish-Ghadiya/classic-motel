import React from "react";
import "./blog.scss";
import { Link } from "react-router-dom";
import BlogHeroBanner from "./blogherobanner";
import categoryApi from "../../categoryApi/categoryApi";
import BlogDetails from "./blogdetails";

function Blog() {
    const blogPosts = categoryApi[3].blogPosts;
    return (
        <>
            <BlogHeroBanner />
            <div className="blog-container">
                <div className="blog-posts">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="blog-post">
                            <img src={post.img} alt={post.title} />
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
            <BlogDetails/>
        </>
    );
}

export default Blog;
