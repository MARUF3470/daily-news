import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummmaryCard from '../Shared/NewsSummaryCard/NewsSummmaryCard';

const Home = () => {
    const Allnews = useLoaderData()
    return (
        <div>
            <h4>All News: {Allnews.length}</h4>
            {
                Allnews.map(news => <NewsSummmaryCard key={news._id} news={news}></NewsSummmaryCard>)
            }
        </div>
    );
};

export default Home;