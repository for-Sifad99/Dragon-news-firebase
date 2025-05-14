import React from 'react';
import swimming from '../../assets/swimming.png';
import classroom from '../../assets/classroom.png';
import playground from '../../assets/playground.png';
import bg from '../../assets/bg.png';

const QZone = () => {
    return (
<div>
            <div className='bg-base-200 p-3 mt-5'>
                <h1 className='text-xl text-primary font-semibold py-2'>Find Us On</h1>
                <div>
                    <img src={swimming} alt="" />
                    <img src={classroom} alt="" />
                    <img src={playground} alt="" />
                </div>
            </div>
            <img className='pt-4 pl-2' src={bg} alt="" />
</div>
    );
};

export default QZone;