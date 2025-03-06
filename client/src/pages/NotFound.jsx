import { Link } from 'react-router-dom';
import React from 'react'

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-base-200">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-error mb-4 animate-pulse">404</h1>
                <p className="text-2xl text-base-content mb-6 animate-fade-in">Page Not Found</p>
                <p className="text-base text-base-content mb-8 animate-fade-in">
                    The page you are looking for does not exist.
                </p>
                <Link to="/" className="btn btn-primary animate-pulse">
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound;