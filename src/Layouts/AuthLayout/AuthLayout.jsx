import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {

    return (
        <div className='bg-base-200 h-screen'>
            <nav className='w-10/11 mx-auto py-4'>
                <Navbar />
            </nav>
            <div className='justify-center items-center my-5 flex flex-col'>
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;