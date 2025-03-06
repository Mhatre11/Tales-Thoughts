import 'react-multi-carousel/lib/styles.css';

import Cards from './Cards'
import Carousel from 'react-multi-carousel';
import React from 'react'

const FeaturedPosts = () => {
    const posts = [
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
            title: 'Artistic Creations',
            content: 'Inspiring works of art.',
            category: ['Art', 'Creation'],
            imageUrl: 'https://placehold.co/300x200',
        },
    ];


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },

    };
    return (
        <div className="container mx-auto p-4 ">
            <h1 className="text-3xl font-bold mb-6 text-center">Featured Posts</h1>
            <Carousel responsive={responsive} autoPlay={true}
                autoPlaySpeed={2000}
                swipeable={true}
                draggable={true}
                infinite={true}
                pauseOnHover={true}>
                {posts.map((post, index) => (
                    <div key={index} className="px-12 py-2">
                        <Cards {...post} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default FeaturedPosts