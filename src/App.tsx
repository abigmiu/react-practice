import { Suspense, useState } from 'react'
import { Outlet, Router, RouterProvider, useRoutes } from 'react-router-dom'
import './App.css'
import routeConfig from '@/routes/index'
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {
    const routes = useRoutes(routeConfig)
    return (
        <>
            <Header></Header>
            <Suspense fallback={<div>Loading</div>}>
                {routes}
            </Suspense>
            <Footer></Footer>
        </>
    )
}

export default App
