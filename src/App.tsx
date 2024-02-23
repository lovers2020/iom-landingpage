import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import NotFound from "./components/notfound";
import Home from "./home";
import { Helmet } from "react-helmet";
import { useSetRecoilState } from "recoil";
import { displayResolution } from "./utils";

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
    const setDisplayResolution = useSetRecoilState(displayResolution);
    useEffect(() => {
        if (document.documentElement.clientWidth < 500) {
            setDisplayResolution("mobile");
        } else {
            setDisplayResolution("web");
        }
    }, [setDisplayResolution]);

    return (
        <>
            <Helmet>
                <title>Instead of me</title>
            </Helmet>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
