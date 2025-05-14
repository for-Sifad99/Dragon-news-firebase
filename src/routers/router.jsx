import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home/Home';
import HomeLayout from '../Layouts/HomeLayout/HomeLayout';
import CategoryNews from '../Pages/CategoryNews/CategoryNews';
import NewsDetails from '../Pages/NewsDetails/NewsDetails';
import AuthLayout from '../Layouts/AuthLayout/AuthLayout';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivetRoute from './PrivetRoute';
import Loader from '../components/Loader/Loader';

const router = createBrowserRouter([
  {
    path: '/', element: <Suspense fallback={<Loader />}><HomeLayout /></Suspense>,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      { path: '', Component: Home },
      {
        path: '/category-news/:id',
        loader: () => fetch('/news.json'),
        element: <CategoryNews />,
        hydrateFallbackElement: <Loader></Loader>,
      },
    ]
  },
  {
    path: '/news-details/:id',
    loader: () => fetch('/news.json'),
    element: <PrivetRoute>
      <NewsDetails />
    </PrivetRoute>,
    hydrateFallbackElement: <Loader></Loader>,
  },
  {
    path: '/auth', Component: AuthLayout,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      { path: '/auth/login', Component: Login },
      { path: '/auth/register', Component: Register },
    ]
  },
  { path: '/*', element: <div>Error 404</div> },
])

export default router;