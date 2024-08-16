
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface Review {
    name: string;
    date: string;
    rating: number;
    comment: string;
}

interface ReviewProps {
    review: Review;
}

const Review: React.FC<ReviewProps> = ({ review }) => {
    const { name, date, rating, comment } = review;

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        return (
            <div className="flex items-center">
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={`full-${i}`} className="text-yellow-500" />
                ))}
                {halfStar === 1 && <FaStarHalfAlt className="text-yellow-500" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar key={`empty-${i}`} className="text-gray-400" />
                ))}
            </div>
        );
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-xl font-bold">
                    {name.charAt(0).toUpperCase()}
                </div>
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-sm text-gray-500">{date}</p>
                </div>
            </div>
            <div className="mb-4">
                {renderStars(rating)}
            </div>
            <p className="text-gray-700">{comment}</p>
        </div>
    );
};

export default Review;