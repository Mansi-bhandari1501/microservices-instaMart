import React from 'react'
import { Outlet } from 'react-router-dom'
// import Header from '../SlidebarLayout/Navbar'

function BaseLayout() {
    return (
        <div>
            {/* <Header /> */}
            <Outlet />
        </div>
    )
}

export default BaseLayout