import { Menu, Search } from 'lucide-react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

import { Link } from 'react-router-dom';
import React from 'react';
import Themes from './Themes';

const Navigation = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm mx-auto p-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} className="btn btn-success lg:hidden">
                        <Menu />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/trending">Trending</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    Tales&Thoughts
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center gap-4">
                    <li>
                        <Link to="/" className="btn btn-soft btn-success btn-md rounded-btn">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="btn btn-ghost btn-md rounded-btn">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/blogs" className="btn btn-ghost btn-md rounded-btn">
                            Blog
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-2">
                <div className="form-control">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Search…"
                            className="input input-bordered w-32 md:w-48"
                            aria-label="Search"
                        />
                        <button className="btn btn-square">
                            <Search />
                        </button>
                    </div>
                </div>
                <Themes />
                <SignedOut>
                    <SignInButton mode={'modal'} className="btn btn-soft btn-secondary" />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    );
};

export default Navigation;




