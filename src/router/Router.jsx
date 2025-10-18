import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import Categories from '../pages/Categories';

const Router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {path: "/", Component: Home},
            {path: "category/:id", Component: Categories,
                loader: () => fetch('https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-resources/refs/heads/main/demo-data/news.json').then(res => res.json())
            }
        ]

    }
])

export default Router;