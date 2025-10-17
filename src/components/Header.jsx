import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-center pt-10'>
                <div className='flex justify-center items-center'>
                    <img className='w-[400px]' src={logo} alt="" />
                </div>
                <p className='text-accent py-3 text-lg font-semibold'>Journalism Without Fear or Favour</p>
                <p className='text-accent font-semibold'>{format(new Date, "EEEE, MMMM dd, YYY")}</p>

            </div>

            <div className='flex items-center gap-3 bg-base-200 p-4 my-7'>
                <p className='text-base-200 bg-secondary px-4 py-2 text-xl'>Latest</p>
                <Marquee speed={40} pauseOnHover>
                    <div className='flex justify-center items-center gap-7'>
                        <p className='text-primary font-semibold text-xl '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet inventore consequuntur pariatur est, rerum earum!</p>
                        <p className='text-primary font-semibold text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet inventore consequuntur pariatur est, rerum earum!</p>
                        <p className='text-primary font-semibold text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet inventore consequuntur pariatur est, rerum earum!</p>
                    </div>

                </Marquee>

            </div>


        </div>
    );
};

export default Header;