import { createBrowserRouter, Navigate } from "react-router-dom";

// layouts
import MainLayout from './layouts/MainLayout.tsx';

// pages
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";
import ProductDetailPage from "./pages/ProductDetailPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/about', element: <AboutPage /> },
            { path: '/contact', element: <ContactPage /> },
            { path: '/checkout', element: <CheckoutPage /> },
            { path: '/product/:url', element: <ProductDetailPage /> },
            { path: '*', element: <Navigate to="/" /> }
        ]
    }
])