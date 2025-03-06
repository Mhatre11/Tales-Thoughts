import React, { useEffect } from 'react';

import { themeChange } from 'theme-change';

const Themes = () => {
    useEffect(() => {
        themeChange(false);
    }, []);

    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
                Theme
                <svg
                    width="12px"
                    height="12px"
                    className="inline-block h-2 w-2 fill-current opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl  max-h-96 overflow-y-auto"
            >
                {/* Default Theme */}
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller w-full btn btn-sm btn-ghost justify-start"
                        aria-label="Default"
                        value="dark"
                    />
                </li>
                {/* Light Theme */}
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller w-full btn btn-sm btn-ghost justify-start"
                        aria-label="Light"
                        value="light"
                    />
                </li>
                {/* Valentine Theme */}
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller w-full btn btn-sm btn-ghost justify-start"
                        aria-label="Valentine"
                        value="valentine"
                    />
                </li>
                {/* Halloween Theme */}
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller w-full btn btn-sm btn-ghost justify-start"
                        aria-label="Halloween"
                        value="halloween"
                    />
                </li>
                {/* Garden Theme */}
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller w-full btn btn-sm btn-ghost justify-start"
                        aria-label="Garden"
                        value="garden"
                    />
                </li>
                {/* Forest Theme */}
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller w-full btn btn-sm btn-ghost justify-start"
                        aria-label="Forest"
                        value="forest"
                    />
                </li>
                {/* Dracula Theme */}
                <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller w-full btn btn-sm btn-ghost justify-start"
                        aria-label="Dracula"
                        value="dracula"
                    />
                </li>
            </ul>
        </div>
    );
};

export default Themes;