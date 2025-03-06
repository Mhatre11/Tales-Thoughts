import React from 'react'

const About = () => {
    return (
        <div className="container mx-auto p-8">
            <div className="prose max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center text-primary">About Us</h1>

                <p className="text-lg mb-4">
                    Welcome to our website! We're a team passionate about creating and sharing valuable content.
                </p>

                <p className="mb-4">
                    Our goal is to provide insightful information and resources to our users. We believe in the power of knowledge and community.
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-secondary">Our Mission</h2>

                <p className="mb-4">
                    We strive to deliver high-quality content that empowers our audience. We're committed to continuous improvement and innovation.
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-secondary">What We Offer</h2>

                <ul className="list-disc list-inside mb-4">
                    <li>Informative Articles</li>
                    <li>Helpful Resources</li>
                    <li>Community Engagement</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-3 text-secondary">Connect With Us</h2>

                <p className="mb-4">
                    We value your feedback and engagement. Feel free to reach out to us with any questions or suggestions.
                </p>

                <div className="flex justify-center space-x-4">
                    <a href="#" className="btn btn-circle btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M22.46 6c-.77.35-1.6.58-2.54.7-2.37-1.55-4-1.25-1.9-2.04C12.8 8.9 9.1 10.7 5.7 10.7c-3 0-5.7-2.5-5.7-5.7 0 .8 0 1.6 0 2.3 0 2.4-1.6 4-3.4 4.1C6.4 16.3 3.3 18.7.5 18.3c4 2.5 8.5 4 13 4 15.6 0 24.3-13 24.3-24.3 0-.4 0-.8-.1-1.2C21.7 7 22.1 6.5 22.5 6z"></path>
                        </svg>
                    </a>
                    <a href="#" className="btn btn-circle btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 8h-2.5C12.33 10 12 10.33 12 10.75V13h-2v2h2v6h3v-6h2.5V13h-2.5V10.75C15 10.33 15.33 10 15.75 10H16V8z"></path>
                        </svg>
                    </a>
                </div>

                <p className="mt-8 text-center">
                    Thank you for being part of our community!
                </p>
            </div>
        </div>
    )
}

export default About