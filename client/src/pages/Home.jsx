import FeaturedPosts from '../components/FeaturedPosts'
import React from 'react'

const Home = () => {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen" style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1528938102132-4a9276b8e320?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
            }}>
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Top 10 things to buy Guide</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-success ">
                            Create Post
                        </button>
                    </div>
                </div>

            </div>
            <FeaturedPosts />

        </>
    )
}

export default Home


