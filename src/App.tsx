import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home";

const router = createBrowserRouter([
    {
        path: "",
        element: <Home />,
    },
]);
function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
