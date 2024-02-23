import { Outlet } from "react-router-dom";
import Header from "./header";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Footer from "./footer";
import { useRecoilValue } from "recoil";
import { displayResolution } from "../utils";
import HeaderWeb from "./header_Web";

export default function Layout() {
    const resolution = useRecoilValue(displayResolution);
    const { scrollY } = useScroll();
    const [bgColor, setBgColor] = useState(false);
    useMotionValueEvent(scrollY, "change", (y) => {
        if (y >= 50) {
            setBgColor(() => true);
        } else {
            setBgColor(() => false);
        }
    });
    return (
        <>
            {resolution === "mobile" ? (
                <Header bgColor={bgColor} />
            ) : (
                <HeaderWeb bgColor={bgColor} />
            )}
            <Outlet />
            <Footer />
        </>
    );
}
