import React, { useState } from 'react';

function CommentSection() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = () => {
        if (newComment.trim() !== '') {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    return (
        <div className="mt-4">
            <h2 className="font-bold text-lg mb-2">Comments</h2>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index} className="mb-2">{comment}</li>
                ))}
            </ul>
            <div className="mt-4">
                <textarea
                    className="w-full p-2 border rounded"
                    rows="4"
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={handleCommentChange}
                ></textarea>
                <button
                    className="bg-orange-400 hover:bg-orange-600 mt-4 text-white py-2 px-4 rounded-full cursor-pointer "
                    onClick={handleCommentSubmit}
                >
                    Post Comment
                </button>
            </div>
        </div>
    );
}

export default CommentSection;
