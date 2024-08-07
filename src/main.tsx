import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Menu from "./Pages/Menu/Menu";
import Cart from "./Pages/Cart/Cart";
import Error from "./Pages/Error/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Menu/Layout.tsx";
import Product from "./Pages/Product/Product.tsx";
import axios from "axios";
import { PREFIX } from "./Help/API.ts";

const Menu = lazy(() => import("./Pages/Menu/Menu"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<>Загрузка</>}>
                        <Menu />
                    </Suspense>
                ),
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/product/:id",
                element: <Product />,
                errorElement: <Error />,
                loader: async ({ params }) => {
                    const { data } = await axios.get(
                        `${PREFIX}/product/${params.id}`
                    );
                    return data;
                },
            },
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
