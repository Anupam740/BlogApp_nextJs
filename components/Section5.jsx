
import React, { useEffect, useState } from 'react';


function Section5() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('/api/createpost'); // Change the API URL if needed
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Trending Posts</h2>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post.title}</li> // Assuming each post has a "title" property
                ))}
            </ul>
        </div>
    );
}

export default Section5
