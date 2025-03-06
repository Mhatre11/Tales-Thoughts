import { Link } from 'react-router-dom'
import React from 'react'

const Card = ({ title, content, category, imageUrl }) => {
    return (
        <Link to='/blogs/:id' className="card bg-base-100 w-96 rounded-2xl shadow-lg transition-transform transform duration-300 cursor-pointer ease-in-out hover:scale-105">
            <figure>
                <img
                    src={imageUrl}
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>{content}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-soft badge-success font-medium">{category}</div>
                </div>
            </div>
        </Link>
    )
}

export default Card