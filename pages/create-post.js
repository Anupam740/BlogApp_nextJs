import { useState } from 'react';

export default function CreatePostForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a new FormData object to hold the form data
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', image);

        try {
            const response = await fetch('http://localhost:3000/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Post data submitted successfully!');
            } else {
                console.error('Failed to submit post data');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }

        // Reset form fields after submission
        setTitle('');
        setContent('');
        setImage(null);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-600 mt-14 rounded shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Create a New Blog Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block font-semibold mb-1">Title:</label>
                    <input
                        type="text"
                        id="title"
                        className="w-full py-2 px-4 border rounded focus:outline-none focus:border-blue-400"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block font-semibold mb-1">Content:</label>
                    <textarea
                        id="content"
                        className="w-full h-32 py-2 px-4 border rounded focus:outline-none focus:border-blue-400"
                        value={content}
                        onChange={handleContentChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block font-semibold mb-1">Image:</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        className="w-full py-2 px-4 border rounded focus:outline-none focus:border-blue-400"
                        onChange={handleImageChange}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-orange-400 hover:bg-orange-600 text-white py-2 px-4 rounded-full cursor-pointer  mt-4:outline-none focus:shadow-outline"
                >
                    Create Post
                </button>
            </form>
        </div>
    );
}
