import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Menu from "./Pages/Menu/Menu";
import Cart from "./Pages/Cart/Cart";
import Error from "./Pages/Error/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Menu/Layout.tsx";
import Product from "./Pages/Product/Product.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Menu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/product/:id",
                element: <Product />,

            }
        ],
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/error",
        element: <Error />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
