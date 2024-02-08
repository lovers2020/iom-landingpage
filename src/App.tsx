import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import NotFound from "./components/notfound";
import Home from "./home";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <NotFound />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
            ],
        },
    ],
    { basename: "/iom-landingpage" }
);
function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
