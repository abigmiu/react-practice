import { lazy } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const Home = lazy(() => import('@/pages/home/home'))
const Donghua = lazy(() => import('@/pages/donghua/donghua'))
const DonghuaTuijian = lazy(() => import('@/pages/donghua/Tuijian/index'))
const MAD = lazy(() => import('@/pages/donghua/MAD/index'))
const MMD = lazy(() => import('@/pages/donghua/MMD/index'))

const config: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/shouye',
        element: <Home />
    },
    {
        path: '/donghua',
        element: <Donghua />,
        children: [
            {
                path: '1',
                element: <DonghuaTuijian />
            },
            {
                path: '2',
                element: <MAD />
            },
            {
                path: '3',
                element: <MMD />
            }
        ]
    }
];

const routers = createBrowserRouter(config);
export default config
