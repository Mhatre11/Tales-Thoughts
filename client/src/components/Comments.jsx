import React, { useState } from 'react';

const Comments = () => {
    const [comments, setComments] = useState([
        { id: 1, author: 'John Doe', text: 'Great post!', date: '2023-11-17' },
        { id: 2, author: 'Jane Smith', text: 'Thanks for sharing.', date: '2023-11-18' },
        // ... initial comments
    ]);

    const [newCommentText, setNewCommentText] = useState('');
    const [newCommentAuthor, setNewCommentAuthor] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newCommentText.trim() && newCommentAuthor.trim()) {
            const newComment = {
                id: Date.now(),
                author: newCommentAuthor,
                text: newCommentText,
                date: new Date().toISOString(), // Store in ISO 8601 format
            };
            setComments([...comments, newComment]);
            setNewCommentText('');
            setNewCommentAuthor('');
        }
    };

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mb-6">
                <div className="mb-2">

                    {/* <input
                        type="text"
                        id="author"
                        value={newCommentAuthor}
                        onChange={(e) => setNewCommentAuthor(e.target.value)}
                        className="input input-bordered w-full"
                        placeholder="Enter your name"
                        required
                    /> */}
                </div>
                <div className="mb-4">
                    <textarea
                        id="comment"
                        value={newCommentText}
                        onChange={(e) => setNewCommentText(e.target.value)}
                        className="textarea textarea-bordered w-full"
                        placeholder="Enter your comment"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit Comment
                </button>
            </form>

            {/* Comment List */}
            <div className="space-y-4">
                {comments.map((comment) => (
                    <div key={comment.id} className="p-4 rounded-lg bg-base-200 shadow-md">
                        <div className="flex items-center mb-2">
                            <div className="avatar">
                                <div className="w-8 rounded-full">
                                    <img src={`https://i.pravatar.cc/150?u=${comment.author}`} alt={comment.author} />
                                </div>
                            </div>
                            <span className="ml-2 font-semibold">{comment.author}</span>
                            <span className="ml-auto text-sm">{comment.date}</span>
                        </div>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;