"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import img1 from "../public/images/img1.jpg";
import img2 from "../public/images/img2.jpg";
import img3 from "../public/images/img3.png";
import img4 from "../public/images/img4.png";
import img5 from "../public/images/img5.jpg";
import Link from "next/link";
import Image from "next/image";

SwiperCore.use([Navigation]);

function BlogList() {
    const imageUrls = [
        img1,
        img2,
        img3,
        img4,
        img5
    ];

    function getRandomImageUrl() {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        return imageUrls[randomIndex];
    }

    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        const storedBlogData = JSON.parse(localStorage.getItem('blogFormData')) || [];
        setBlogData(storedBlogData);
    }, []);

    const handleDelete = (index) => {
        const updatedBlogData = [...blogData];
        updatedBlogData.splice(index, 1);
        localStorage.setItem('blogFormData', JSON.stringify(updatedBlogData));
        setBlogData(updatedBlogData);
    };

    const handleUpdate = (index, updatedBlog) => {
        const updatedBlogData = [...blogData];
        updatedBlogData[index] = updatedBlog;
        localStorage.setItem('blogFormData', JSON.stringify(updatedBlogData));
        setBlogData(updatedBlogData);
    };

    return (
        <section className="container mx-auto md:px-20 py-16">
            <h1 className="font-bold text-4xl py-12 text-center">Your Blogs</h1>
            {blogData.length === 0 ? (
                <p>No blogs available.</p>
            ) : (
                <Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        }
                    }}
                    navigation
                >
                    {blogData.map((blog, index) => (
                        <SwiperSlide key={index}>
                            <div className="  p-4 ">
                                <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                                    <div className="images">
                                        <Link href={"/"}>
                                            <Image src={getRandomImageUrl()} alt={`Image for ${blog.title}`} width={400} height={350} />
                                        </Link>
                                    </div>
                                    <div className="info flex justify-center flex-col">
                                        <Link href={"/"}>
                                            <span className="text-orange-600 hover:text-orange-800">{blog.category || "No Category"}</span>
                                        </Link>
                                        <span className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">{blog.title || "No Title"}</span>
                                        <p className="text-gray-500 py-3">{blog.description || "No Description"}</p>
                                        <p className="text-gray-600 mb-4">Author: {blog.author}</p>
                                    </div>
                                    <div className="flex gap-5">
                                        <button
                                            onClick={() => handleDelete(index)}
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => handleUpdate(index, { ...blog, title: 'Updated Title' })}
                                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </section>
    );
}

export default BlogList;
