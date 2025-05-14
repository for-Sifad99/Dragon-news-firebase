import React from 'react';
import Header from '../../components/Header/Header';
import LatestNews from '../../components/LatestNews/LatestNews';
import Navbar from '../../components/Navbar/Navbar';
import RightAside from '../../components/HomeLayouts/RightAside';
import NewsDetailsCart from '../../components/NewsDetailsCart/NewsDetailsCart';

const NewsDetails = () => {

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
                <section className='main col-span-9'>
                    <NewsDetailsCart />
                </section>
                <aside className='col-span-3 sticky top-0 h-screen'>
                    <RightAside />
                </aside>
            </main>
        </>
    );
};

export default NewsDetails;