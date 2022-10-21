import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummmaryCard from '../../Shared/NewsSummaryCard/NewsSummmaryCard';

const Category = () => {
    const allNews = useLoaderData()
    //console.log(allNews)
    return (
        <div>
            {
                allNews.map(news => <NewsSummmaryCard key={news._id} news={news}></NewsSummmaryCard>)
            }

        </div>
    );
};

export default Category;