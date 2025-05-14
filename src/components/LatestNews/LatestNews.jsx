import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex bg-base-200 items-center gap-5 p-2'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' speed={60} pauseOnHover={true} gradient={false}>
                <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights:  Germany vs Spain as...</p>
                <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;