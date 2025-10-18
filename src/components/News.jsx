import React from 'react';
import { FaStar, FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";

const News = ({news}) => {
    return (
        <div className="bg-white rounded-xl shadow-sm  overflow-hidden hover:shadow-md transition-shadow duration-300">
            {/* Author Section */}
            <div className="flex items-center justify-between px-4 py-3 bg-base-200">
                <div className="flex items-center gap-3">
                    <img
                        src={news.author.img}
                        alt={news.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-800">{news.author.name}</h3>
                        <p className="text-sm text-gray-500">
                            {new Date(news.author.published_date).toISOString().split("T")[0]}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                    <FaRegBookmark className="cursor-pointer hover:text-gray-700" />
                    <FaShareAlt className="cursor-pointer hover:text-gray-700" />
                </div>
            </div>

            {/* Title */}
            <div className="px-4 py-3">
                <h2 className="text-lg font-bold text-gray-800 leading-snug">
                    {news.title}
                </h2>
            </div>

            {/* Image */}
            <div>
                <img
                    src={news.thumbnail_url}
                    alt={news.title}
                    className="w-full object-cover p-4 rounded-3xl "
                />
            </div>

            {/* Details */}
            <div className="px-4 py-3 text-gray-700 text-sm">
                <p>
                    <span className="font-semibold">Tags:</span>{" "}
                    {news.tags.join(", ")}
                </p>
                <p className="mt-2">
                    {news.details.length > 220
                        ? `${news.details.slice(0, 220)}...`
                        : news.details}
                </p>
                <button className="text-orange-600 font-semibold mt-2 hover:underline">
                    Read More
                </button>
            </div>

            {/* Footer (Rating + Views) */}
            <div className="flex items-center justify-between px-4 py-3 border-t text-gray-600">
                <div className="flex items-center gap-2">
                    {[...Array(news.rating.number)].map((_, i) => (
                        <FaStar key={i} className="text-orange-500" />
                    ))}
                    <span className="font-medium">{news.rating.number}</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaEye />
                    <span>{news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default News;