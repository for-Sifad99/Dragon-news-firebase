import React from 'react';
import logo from '../../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-3 pt-10'>
            <img src={logo} alt="header logo image" />
            <p className='text-base text-accent'>Journalism Without Fear or Favour</p>
            <h4 className='text-accent text-lg font-semibold'><span className='font-extrabold'>{format(new Date(), 'EEEE, ')}</span>{format(new Date(),'  MMMM MM,  yyy')}</h4>
        </div>
    );
};

export default Header;