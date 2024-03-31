import React, { Suspense } from 'react'
// import SuspenseLoader from '../components/SuspenseLoader';
import { Navigate, RouteObject } from 'react-router';
import SidebarLayout from './layouts/SlidebarLayout';
import BaseLayout from './layouts/BaseLayout';
// import Dashboard from '../pages/Dashboard';
import Settings from './content/pages/Settings';
import AllProduct from './content/pages/Products/AllProduct';
import AddProduct from './content/pages/Products/AddProduct';
import EditProduct from './content/pages/Products/EditProduct';
import Orders from './content/pages/Orders';
import OrderDetail from './content/pages/Orders/orderDetails/orderInfo/paymentCard';
import Login from './content/pages/Login';
import Maintaince from './content/pages/Maintaince';
import Error from './content/pages/404Error';
import SignupPage from './content/pages/Signup';
import OrderDetails from './content/pages/Orders/orderDetails';
import OrderList from './content/pages/Orders/orderList';
import Dashboard from './content/pages/Dashboard';
import Home from './content/pages/User/Home';
import ShipmentLocation from './content/pages/User/Home/Shipment/ShipmentLocation';
import Header from './layouts/SlidebarLayout/Navbar';
// import Slide from './layouts/BaseLayout';
// import Login from '../pages/Login';
// import SignUp from '../pages/SignUp';
// import ProductAdd from '../pages/ProductAdd';

// const Loader = (Component) => (props) =>
// (
//     <Suspense fallback={<SuspenseLoader />}>
//         <Component {...props} />
//     </Suspense>
// );

const routes: RouteObject[] = [
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {
                path: '',
                element: <Navigate to="login" replace />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/Maintaince',
                element: <Maintaince />
            },
            {
                path: '*',
                element: <Error />
            },
            {
                path: '/signup',
                element: <SignupPage />
            },
        ]
    },
    {
        path: '/home',
        element: <SidebarLayout />,
        children: [
            {
                path: '',
                element: <Navigate to="settings" replace />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'settings',
                element: <Settings />
            }
        ]
    },
    {
        path: '/products',
        element: <SidebarLayout />,
        children: [
            {
                path: '',
 
                element: <Navigate to="allProduct" replace />
            },
            {
                path: 'addProduct',
                element: <AddProduct />
            },
            {
                path: 'allProduct',
                element: <AllProduct />
            },
            {
                path: 'editProduct',
                element: <EditProduct />
            }
        ]
    },
    {
        path: '/orders',
        element: <SidebarLayout />,
        children: [
            {
                path: '',
 
                element: <Navigate to="OrderList" replace />
            },
            {
                path: 'order',
                element: <Orders />
            },
            {
                path: 'orderDetail',
                element: <OrderDetails />
            },
            {
                path: 'OrderList',
                element: <OrderList />
            },
            // {
            //     path: 'editProduct',
            //     element: <EditProduct />
            // }
        ]
    },
    {
        path: '/user',
        element: <SidebarLayout />,
        children: [
            {
                path: '',
 
                element: <Navigate to="home" replace />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'ShipmentLocation',
                element: <ShipmentLocation />
            },
            {
                path: 'OrderList',
                element: <OrderList />
            },
            // {
            //     path: 'editProduct',
            //     element: <EditProduct />
            // }
        ]
    },
]

export default routes