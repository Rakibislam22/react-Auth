import React, { use } from 'react';
import { NavLink } from 'react-router';

const categories = fetch('/categories.json').then(data => data.json());


const LeftAside = () => {
    const categoriesData = use(categories);

    return (
        <div>
           <h1 className='font-semibold pb-3'>All Category</h1>
           <div className='flex lg:flex-col flex-row flex-wrap'>
            {
                categoriesData.map(cata => <NavLink key={cata.id} to={`category/${cata.id}`} className='rounded-sm lg:px-10 px-3 py-3 hover:bg-base-200 my-1 lg:mx-0 mx-1 text-primary font-medium'>{cata.name}</NavLink>)
            }
            </div>         
        </div>
    );
};

export default LeftAside;