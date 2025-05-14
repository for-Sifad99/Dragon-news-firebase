import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router';

const Home = () => {
    return <>
        <Helmet>
            <title>Home || Dragon News</title>
            <meta name="description" content="Read the latest and breaking news from Dragon News." />
        </Helmet>
        <Navigate to="/category-news/1" />;
    </>
};

export default Home;