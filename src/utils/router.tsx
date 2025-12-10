import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import AboutUs from '../pages/Aboutus';
import Contact from '../pages/ContactUs';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Product from '../pages/Products';
import ProductInfo from '../pages/Products/ProductInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'contact', element: <Contact /> },
      {
        path: 'products/:categoryId',
        children: [
          { index: true, element: <Product /> },
          {
            path: 'product-info',
            element: <ProductInfo />,
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
]);

export default router;
