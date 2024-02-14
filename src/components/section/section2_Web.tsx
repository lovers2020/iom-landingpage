import { Box, VStack, Text, HStack, Image, Fade } from "@chakra-ui/react";
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";
import { useState } from "react";
import sample_1 from "../../images/sample_1.PNG";
import sample_2 from "../../images/sample_2.PNG";
const textVariants = {
    initial: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1.5,
        transition: {
            duration: 0.8,
        },
    },
    exit: {
        opacity: 1,
        scale: 1,
    },
};

export default function Section2Web() {
    const { scrollY } = useScroll();
    const [showText, setShowText] = useState(false);
    const [showPic, setShowPic] = useState(false);
    useMotionValueEvent(scrollY, "change", (y) => {
        if (y > 60) {
            setShowText(true);
        } else if (y < 50) {
            setShowText(false);
        }
    });
    useMotionValueEvent(scrollY, "change", (y) => {
        if (y > 250) {
            setShowPic(true);
        } else if (y < 240) {
            setShowPic(false);
        }
    });
    return (
        <>
            <section
                style={{
                    padding: "3rem 0 3rem 0",
                    backgroundColor: "#5FBDFF",
                    background:
                        "linear-gradient(to bottom, #5FBDFF 50%, #96EFFF 100%)",
                }}
            >
                {/* #F8F8F8 */}
                <VStack>
                    <Box
                        fontWeight={"400"}
                        textAlign={"center"}
                        color={"black"}
                    >
                        <h1 style={{ fontSize: "22px", fontWeight: "700" }}>
                            <strong>웹사이트가 필요하셔서 들어오셨겠죠?</strong>
                        </h1>
                        <Text>
                            소통이 잘 되지않아 결과물이<br></br> 마음에 들지
                            않으셨던 적이 있으셨죠!
                        </Text>
                    </Box>
                    <AnimatePresence initial={false}>
                        {showText ? (
                            <Box
                                as={motion.div}
                                key="text1"
                                variants={textVariants}
                                initial="initial"
                                animate="visible"
                                exit="exit"
                                my={4}
                                color={"black"}
                                fontWeight={"600"}
                                fontSize={"24px"}
                            >
                                <Text>저희와 함께 해보시지 않으실래요?</Text>
                            </Box>
                        ) : null}
                    </AnimatePresence>
                    <VStack mt={8}>
                        <Fade
                            in={showPic}
                            transition={{ enter: { duration: 2.2 } }}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                gap: "15px",
                            }}
                        >
                            <Image
                                w={"80%"}
                                boxShadow={"0 6px 15px 0px rgba(0,0,0,0.5)"}
                                src={sample_1}
                            />
                            <Image
                                boxShadow={"0 6px 15px 0px rgba(0,0,0,0.5)"}
                                w={"80%"}
                                src={sample_2}
                            />
                        </Fade>

                        <Text color={"gray.500"} fontSize={"14px"}>
                            Instead of me의 작업물입니다.
                        </Text>
                        <Box
                            mt={6}
                            color={"black"}
                            fontWeight={"500"}
                            textAlign={"center"}
                            fontSize={"17px"}
                        >
                            <Text>일부 책임감 없는 제작 업체들과 다르게</Text>
                            <Text>
                                제작 이후{" "}
                                <strong style={{ fontWeight: "700" }}>
                                    사후관리까지
                                </strong>{" "}
                                확실하게 책임지겠습니다.
                            </Text>
                            <Text>매일 진행상황 공유는 물론이며,</Text>
                            <Text>
                                연락주시면 10분내로 꼭 답변드리겠습니다.
                            </Text>
                        </Box>
                    </VStack>
                </VStack>
            </section>
        </>
    );
}
