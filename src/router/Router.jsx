import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';

const Router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout
    }
])

export default Router;