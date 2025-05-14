import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import LatestNews from '../../components/LatestNews/LatestNews';
import Navbar from '../../components/Navbar/Navbar';
import LeftAside from '../../components/HomeLayouts/LeftAside';
import RightAside from '../../components/HomeLayouts/RightAside';
import { useNavigation } from 'react-router';
import Loader from '../../components/Loader/Loader'

const HomeLayout = () => {
    const { state } = useNavigation();
    return (
        <>
            <header>
                <Header />
                <section className='w-10/12 mx-auto my-5'>
                    <LatestNews />
                </section>
                <nav className='w-10/12 mx-auto my-5'>
                    <Navbar />
                </nav>
            </header>
            <main className='w-10/12 mx-auto my-5 grid grid-cols-12 gap-8'>
                <aside className='col-span-3 sticky top-0 h-screen'>
                    <LeftAside />
                </aside>
                <section className='main col-span-6'>
                        {state === 'loading' ? <Loader /> : <Outlet />}
                </section>
                <aside className='col-span-3 sticky top-0 h-screen'>
                    <RightAside />
                </aside>
            </main>
        </>
    );
};

export default HomeLayout;