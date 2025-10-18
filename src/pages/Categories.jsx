import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import News from '../components/News';

const Categories = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const [filterNews, setFilterNews] = useState([]);

    useEffect(() => {
        if (id == 0) {
            setFilterNews(data);
        }
        else if (id == 1) {
            const filterData = data.filter(d => d.others.is_today_pick === true);
            setFilterNews(filterData);
        }
        else {
            const filterDataById = data.filter(d => d.category_id == id);
            setFilterNews(filterDataById);
        }
    }, [data, id]);

    return (
        <div>
            <h1 className="text-xl font-bold mb-3 text-gray-800">
                Dragon News Home
            </h1>

            <div className="grid gap-6">
                {filterNews.length > 0 ? (
                    filterNews.map((news) => (
                        <News key={news.id} news={news} />
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No news found in this category.</p>
                )}
            </div>
        </div>
    );
};

export default Categories;