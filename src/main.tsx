import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Menu from "./Pages/Menu/Menu";
import Cart from "./Pages/Cart/Cart";
import Error from "./Pages/Error/Error";
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Menu/Layout.tsx";
import Product from "./Pages/Product/Product.tsx";
import axios from "axios";
import { PREFIX } from "./Help/API.ts";
import AuthLayout from "./Layout/Auth/AuthLayout.tsx";
import Login from "./Pages/Login/Login.tsx";
import Register from "./Pages/Register/Register.tsx";

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
                    return defer({
                        data: axios
                            .get(`${PREFIX}/product/${params.id}`)
                            .then((data) => data),
                    });

                    // const { data } = await axios.get(
                    //     `${PREFIX}/product/${params.id}`
                    // );
                    // return data;
                },
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
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
