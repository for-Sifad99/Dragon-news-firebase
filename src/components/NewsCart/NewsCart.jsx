import { FaStar, FaStarHalfAlt, FaRegStar, FaRegEye } from 'react-icons/fa';
import { BsBookmark, BsShare } from 'react-icons/bs';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
const NewsCart = ({ news }) => {
    const {
        id,
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view
    } = news;

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar size={20} key={`full-${i}`} className="text-yellow-400" />);
        }

        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt size={20} key="half" className="text-yellow-400" />);
        }

        while (stars.length < 5) {
            stars.push(<FaRegStar size={20} key={`empty-${stars.length}`} className="text-yellow-400" />);
        }

        return stars;
    };


    return (
        <>
            <Helmet>
                <title>News Summary | Dragon News</title>
                <meta name="description" content="Get the latest hot news summary from Dragon News. Stay informed with trending topics and headlines." />
            </Helmet>

            <div className="rounded-lg shadow space-y-4 mb-5">
                {/* Header */}
                <div className="flex justify-between items-center bg-base-200 px-5 py-4">
                    <div className="flex items-center gap-3">
                        <img src={author?.img} alt={author?.name} className="w-8 h-8 rounded-full" />
                        <div>
                            <h3 className="text-lg text-primary font-bold">{author?.name}</h3>
                            <p className="text-xs text-gray-500">{new Date(author?.published_date).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="flex gap-2 text-gray-600 text-lg px-5">
                        <BsBookmark className="cursor-pointer" />
                        <BsShare className="cursor-pointer" />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-gray-800 px-5">{title}</h2>

                {/* Thumbnail */}
                <img src={thumbnail_url} alt="news thumbnail" className="w-full h-48 object-cover rounded-md px-5" />

                {/* Details */}
                <p className="text-sm text-gray-600 px-5">
                    {details?.slice(0, 200) || 'No details found...'}

                    
                        <Link to={`/news-details/${id}`} >
                            <button
                                className="text-red-500 font-medium text-base hover:underline"
                            >
                                Read More
                            </button>
                        </Link>
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center text-sm text-gray-500 px-5 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="flex">{renderStars(rating?.number)}</div>
                        <span className="text-lg text-primary font-light">{rating?.number}</span>
                    </div>
                    <div className="flex items-center gap-2 text-lg">
                        <FaRegEye size={20} />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsCart;
