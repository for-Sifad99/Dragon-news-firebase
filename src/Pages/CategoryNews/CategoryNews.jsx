import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCart from '../../components/NewsCart/NewsCart';

const CategoryNews = () => {
    const [news, setNews] = useState([]);

    const { id } = useParams();
    const newsData = useLoaderData();
    // console.log(id, newsData);

    useEffect(() => {
        if (id === '0') {
            setNews(newsData);
        } else if (id === '1') {
            const FilteredData = newsData.filter(news => news?.others?.is_today_pick === true);
            setNews(FilteredData);
        } else {
            const FilteredData = newsData.filter(news => news.category_id === Number(id));
            setNews(FilteredData);
        }
    }, [id, newsData])

    return (
        <>
            <div>
                <div className='mb-5'>
                    <h1 className='text-xl text-primary font-semibold'>Dragon News Home || News<span className='font-bold text-secondary'> ({news.length})</span></h1>
                </div>
                <div>
                    {
                        news.map(news => <NewsCart key={news.id} news={news}></NewsCart>)
                    }
                </div>
            </div>
        </>
    );
};

export default CategoryNews;