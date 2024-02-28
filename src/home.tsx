import Section1 from "./components/section/section1";
import Section2 from "./components/section/section2";
import Section3 from "./components/section/section3";
import { useRecoilValue } from "recoil";
import { displayResolution } from "./utils";
import Section1Web from "./components/section/section1_Web";
import Section2Web from "./components/section/section2_Web";
import Section3Web from "./components/section/section3_Web";

export default function Home() {
    const resolution = useRecoilValue(displayResolution);
    return (
        <>
            {resolution === "mobile" ? (
                <>
                    <Section1 />
                    <Section2 />
                    <Section3 />
                </>
            ) : (
                <>
                    <Section1Web />
                    <Section2Web />
                    <Section3Web />
                </>
            )}
        </>
    );
}
