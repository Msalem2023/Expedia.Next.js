"use client"

import { FaWrench } from "react-icons/fa";

const CustomError = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
            <FaWrench className="text-6xl text-yellow-600 mb-4" />
            <h1 className="text-4xl font-bold text-yellow-600">We're Fixing Things!</h1>
            <p className="text-xl mt-4">Our website is currently undergoing maintenance. We'll be back shortly!</p>
            <a href="/" className="mt-8 text-blue-500 hover:underline">Go back to Home</a>
        </div>
    );
};
export default CustomError;
