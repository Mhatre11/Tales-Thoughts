import React, { useState } from 'react'

import Comments from '../components/Comments';

const Blog = () => {
    // Mock admin state (replace with your actual auth logic)
    const [isAdmin, setIsAdmin] = useState(true); // Set to true for testing

    const handleDelete = () => {
        // Implement your delete logic here (e.g., API call)
        console.log('Blog post deleted!');
        // Redirect or update UI as needed
    };
    return (
        <div className="min-h-screen bg-base-200 py-12">
            <div className="container mx-auto px-4">
                <div className="prose max-w-3xl mx-auto bg-base-100 rounded-lg shadow-lg p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-4xl font-bold text-primary">Development</h1>
                        {isAdmin && (
                            <button
                                className="btn btn-error btn-sm"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        )}
                    </div>

                    <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://placehold.co/1200x600"
                            alt="Blog Post Image"
                            className="w-full object-cover"
                        />
                    </div>

                    <div className="flex justify-between items-center mb-6">
                        <span className="badge badge-primary">Category</span>
                        <span className="text-sm text-gray-500">Published: November 17, 2023</span>
                    </div>

                    <div className="text-lg leading-relaxed">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Another paragraph of content. More details, examples, and
                            explanations can go here. You can add images, lists, and other
                            elements as needed.
                        </p>
                        <ul>
                            <li>List item 1</li>
                            <li>List item 2</li>
                            <li>List item 3</li>
                        </ul>
                        <p>Continue with more content...</p>
                    </div>
                    <Comments />
                </div>
            </div>
        </div>
    )
}

export default Blog