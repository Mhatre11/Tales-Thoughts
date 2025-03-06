import 'react-quill-new/dist/quill.snow.css';

import React, { useState } from 'react';

import ReactQuill from 'react-quill-new';
import { useUser } from '@clerk/clerk-react';

const CreateBlog = () => {
    const { isLoaded, isSignedIn, user } = useUser();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('Development'); // Default category
    const categories = ['Development', 'Design', 'General']; // Available categories
    const [coverImage, setCoverImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your create blog logic here (e.g., API call)
        const newBlog = {
            title,
            content,
            category,
            coverImage,
            date: new Date().toISOString(), // Add current date
        };
        console.log('New blog post:', newBlog);
        // Reset form or redirect as needed
        setTitle('');
        setContent('');
        setCoverImage('');
    };

    if (!isLoaded) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    // if (!isSignedIn || !user.publicMetadata.isAdmin) {
    //   return (
    //     <div className="min-h-screen flex items-center justify-center bg-base-200">
    //       <div className="text-center">
    //         <h1 className="text-3xl font-bold mb-4 text-error">Access Denied</h1>
    //         <p className="text-lg text-gray-600">You must be an admin to create a blog post.</p>
    //       </div>
    //     </div>
    //   );
    // }

    return (
        <div className="min-h-screen bg-base-200 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto bg-base-100 rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold mb-6 text-primary">Create New Blog Post</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="input input-success w-full"
                                placeholder="Enter a title"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="text"
                                id="coverImage"
                                value={coverImage}
                                onChange={(e) => setCoverImage(e.target.value)}
                                className="input input-bordered w-full"
                                placeholder="Enter cover image URL"
                                required
                            />
                        </div>

                        <div className="mb-5">
                            <select
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="select select-bordered w-full"
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <ReactQuill value={content} onChange={setContent} className="bg-base-200 rounded-lg" />


                        <button type="submit" className="btn btn-primary w-full">
                            Create Post
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateBlog;