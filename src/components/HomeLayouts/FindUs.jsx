import React from 'react';
import fb from '../../assets/fb.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';

const FindUs = () => {
    return (
        <div>
            <h1 className='text-xl text-primary font-semibold mt-8 mb-3'>Find Us On</h1>
            <div className="join join-vertical w-full">
                <button className="group flex gap-2 btn join-item text-base text-primary justify-start bg-white hover:bg-base-200 font-normal py-6">
                    <img className="py-1 px-2 rounded-full group-hover:bg-white  bg-[#f5f5f5] transition-colors duration-300" src={fb} alt="" />
                    Facebook
                    </button>
                <button className="group flex gap-2 btn join-item text-base text-primary justify-start bg-white hover:bg-base-200 font-normal py-6">
                    <img className="py-2 px-[6px] rounded-full group-hover:bg-white  bg-[#f5f5f5] transition-colors duration-300" src={twitter} alt="" />Twitter
                    </button>
                <button className="group flex gap-2 btn join-item text-base text-primary justify-start bg-white hover:bg-base-200 font-normal py-6">
                    <img className="p-[6px] rounded-full group-hover:bg-white  bg-[#f5f5f5] transition-colors duration-300" src={instagram} alt="" />Instagram
                </button>

            </div>
        </div>
    );
};

export default FindUs;