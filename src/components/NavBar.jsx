import React from 'react';
import { NavLink } from 'react-router';
import userLogo from '../assets/user.png';

const NavBar = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto flex justify-between items-center'>
                <div>

                </div>
                <div className='md:pl-40 flex justify-center items-center gap-4'>
                    <NavLink className='text-accent text-lg font-semibold'>Home</NavLink>
                    <NavLink className='text-accent text-lg font-semibold'>About</NavLink>
                    <NavLink className='text-accent text-lg font-semibold'>Career</NavLink>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <img src={userLogo} alt="" />
                    <button className='btn btn-primary px-10 '>Login</button>
                </div>
            </div>


        </div>
    );
};

export default NavBar;