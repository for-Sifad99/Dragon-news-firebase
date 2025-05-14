import React from 'react';
import SocialLogin from './SocialLogin';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import FindUs from './FindUs';
import QZone from './QZone';

const RightAside = () => {
    return (
        <div>
           <SocialLogin />
           <div className='flex flex-col space-y-2'>
                <button className='btn btn-outline btn-info w-full'><FaGoogle />Login with Google</button>
                <button className='btn btn-outline btn-neutral w-full'><FaGithub />Login with Github</button>
           </div>
           <FindUs />
           <QZone />
        </div>
    );
};

export default RightAside;