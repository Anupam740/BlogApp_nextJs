"use client"
import React, { useState } from 'react';

function CreatePost() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(title, category, description, author, image);

        // Save form data to local storage
        const formData = { title, category, description, author, image };
        const existingData = localStorage.getItem('blogFormData') || '[]';
        const newData = [...JSON.parse(existingData), formData];
        localStorage.setItem('blogFormData', JSON.stringify(newData));

        // Reset form fields
        setTitle("");
        setCategory("");
        setDescription("");
        setAuthor("");
        setImage("");

        alert("New blog added and data saved in local storage");
        
    };

    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8 mb-6 flex justify-center items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2 mb-6'>
                        Create Blog
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-1/2'>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className='mt-8 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" className='mt-8 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description...' cols="30" rows="10" className='mt-8 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" className='mt-8 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Paste the link of your Image" className='mt-8 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-700 px-6 py-3 my-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300 '>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;
