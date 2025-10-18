import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import LeftAside from '../components/LeftAside';
import { Outlet } from 'react-router';
import RightAside from '../components/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <NavBar></NavBar>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12'>
                {/* left side */}
                <section className='col-span-3'>
                    <LeftAside></LeftAside>
                </section>

                {/* main section */}
                <section className='col-span-6'>
                    <Outlet></Outlet>

                </section>

                {/* right side */}

                <section className='col-span-3'>
                    <RightAside></RightAside>
                </section>

            </main>
        </div>
    );
};

export default HomeLayout;