import React, { use} from 'react';
import { useLocation, Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
    const { userSignout, user } = use(AuthContext);

    const handleLogout = () => {
        userSignout().then(() => {
            // console.log('Sign - out successful.')
        }).catch((error) => {
            // console.log(error.message)
        })
    }

    const location = useLocation();
    const isHomeActive =
        location.pathname === '/' ||
        location.pathname.startsWith('/category-news/') ||
        location.pathname.startsWith('/news-details/');

    const isAboutActive = location.pathname === '/about';
    const isCareerActive = location.pathname === '/career';
    return (
        <div className='flex justify-between items-center'>
            {
                user ? <div className="flex items-center gap-3">
                    <img src={user?.photoURL} alt='user profile picture' className="w-8 h-8 rounded-full" />
                    <h3 className="text-lg text-primary font-bold">{user.name}</h3>
                </div> : <h3 className="text-lg text-primary font-bold w-52">To Explore Login Your Account ✅</h3>
            }
            <div className='nav text-accent flex gap-5'>
                <Link to="/" className={isHomeActive ? 'active' : ''}>
                    Home
                </Link>
                <Link to="/about" className={isAboutActive ? 'active' : ''}>
                    About
                </Link>
                <Link to="/career" className={isCareerActive ? 'active' : ''}>
                    Career
                </Link>
            </div>
            <div className='login-btn flex gap-5 '>
                <img className='rounded-full' src={user} alt="" />
                {
                    user ? 
                        <button onClick={handleLogout} className='btn btn-primary px-8'>Logout</button>
                        :
                    <Link to="/auth/login">
                        <button className='btn btn-primary px-8'>Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;