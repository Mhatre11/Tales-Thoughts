import React, { useState } from 'react';

import Card from './Cards';

const Blogs = () => {
    const allPosts = [
        {
            title: 'Exploring Nature',
            content: 'Discover the beauty of the natural world.',
            category: ['Nature', 'Travel'],
            imageUrl: 'https://placehold.co/300x200',
        },
        {
            title: 'Tech Innovations',
            content: 'Latest trends in technology.',
            category: ['Tech', 'Innovation'],
            imageUrl: 'https://placehold.co/300x200',
        },
        {
            title: 'Cooking Delights',
            content: 'Delicious recipes to try at home.',
            category: ['Food', 'Cooking'],
            imageUrl: 'https://placehold.co/300x200',
        },
        {
            title: 'Travel Adventures',
            content: 'Exciting destinations to explore.',
            category: ['Travel', 'Adventure'],
            imageUrl: 'https://placehold.co/300x200',
        },
        {
            title: 'Coding Tips',
            content: 'Useful coding tricks and techniques.',
            category: ['Coding', 'Development'],
            imageUrl: 'https://placehold.co/300x200',
        },
        {
            title: 'Nature Photography',
            content: 'Capturing the essence of nature.',
            category: ['Nature', 'Photography'],
            imageUrl: 'https://placehold.co/300x200',
        },
        {
            title: 'AI and Future',
            content: 'The impact of AI on our lives.',
            category: ['Tech', 'AI'],
            imageUrl: 'https://placehold.co/300x200',
        },
        {
            title: 'Vegan Recipes',
            content: 'Healthy and delicious vegan meals.',
            category: ['Food', 'Vegan'],
            imageUrl: 'https://placehold.co/300x200',
        },
    ];

    const [visibleBlogs, setVisibleBlogs] = useState(6);
    const loadMoreStep = 6;
    const [selectedCategory, setSelectedCategory] = useState('All');

    const allCategories = ['All', ...new Set(allPosts.flatMap((post) => post.category))];

    const filteredPosts = selectedCategory === 'All'
        ? allPosts
        : allPosts.filter((post) => post.category.includes(selectedCategory));

    const displayedBlogs = filteredPosts.slice(0, visibleBlogs);

    const handleLoadMore = () => {
        setVisibleBlogs((prevVisible) => prevVisible + loadMoreStep);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setVisibleBlogs(loadMoreStep); // Reset visible blogs when category changes
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">All Blogs</h1>

            <div className="flex justify-center mb-4">
                {allCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`btn btn-sm mx-1 ${selectedCategory === category ? 'btn-primary' : 'btn-outline'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedBlogs.map((post, index) => (
                    <div key={index} className="px-2 py-2">
                        <Card {...post} />
                    </div>
                ))}
            </div>

            {visibleBlogs < filteredPosts.length && (
                <div className="text-center mt-4">
                    <button onClick={handleLoadMore} className="btn btn-primary">
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Blogs;