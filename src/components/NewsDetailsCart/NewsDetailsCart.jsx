import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData, useParams } from 'react-router';

const NewsDetailsCart = () => {
    const { id } = useParams();
    const news = useLoaderData();
    const newsDetails = news.find(item => item.id === id);

    // ✅ Handle invalid ID (not found)
    if (!newsDetails) {
        return (
            <div className="text-center my-10">
                <p className='text-red-500 text-xl font-semibold'>News not found! 😢</p>
                <Link to='/category-news/1' className="btn btn-secondary px-8 mx-5 mb-3">
                    Back to All News
                </Link>
            </div>
        );
    }

    const { title, author, details, thumbnail_url } = newsDetails || {};
    return (
      <>
            <Helmet>
                <title>{newsDetails?.title || 'News Details'} | Dragon News</title>
                <meta name="description" content={newsDetails?.details?.slice(0, 150) || 'No details available'} />
            </Helmet>


            <div className="rounded-lg shadow space-y-4 mb-5">
                <h1 className='text-xl text-primary font-semibold'>Hot Dragon News</h1>
                <div className="flex items-center gap-3  px-5 py-2">
                    <img src={author?.img} alt={author?.name} className="w-8 h-8 rounded-full" />
                    <div>
                        <h3 className="text-lg text-primary font-bold">Post _{author?.name}</h3>
                        <p className="text-xs text-gray-500">{new Date(author?.published_date).toLocaleDateString()}</p>
                    </div>
                </div>

                {/* Thumbnail */}
                <img src={thumbnail_url} alt="news thumbnail" className="w-full  object-cover rounded-md px-5" />

                {/* Title */}
                <h2 className="text-lg font-bold text-gray-800 px-5">{title}</h2>

                {/* Details */}
                <p className="text-sm text-gray-600 px-5">
                    {details }
                </p>

                {/* Back Btn */}
                <Link to='/category-news/1' className="btn btn-secondary px-8 mx-5 mb-3">
                    Back to All News
                </Link>
            </div>
      </>
    );
};

export default NewsDetailsCart;