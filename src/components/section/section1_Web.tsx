import { Box, VStack, Text, Heading, AspectRatio } from "@chakra-ui/react";
import bannerVideo from "../../images/banner_animation.mp4";
import CTAButton from "../CTAButton";

export default function Section1Web() {
    return (
        <>
            <section
                style={{
                    paddingTop: "1rem",
                    backgroundColor: "#7B66FF",
                    background:
                        "linear-gradient(to bottom, #7B66FF, #5FBDFF 100%)",
                }}
            >
                <VStack>
                    <Box
                        fontWeight={"500"}
                        fontSize="28px"
                        textAlign={"center"}
                    >
                        <Heading fontSize={"64px"}>
                            <strong>웹사이트 제작</strong>
                        </Heading>
                        <Text>끝까지 책임져드릴게요</Text>
                    </Box>
                    <Box my={4} color={"gray.300"}>
                        <Text textAlign={"center"}>
                            대기업 출신 개발자들이 책임지고 개발해드려요.
                        </Text>
                    </Box>
                    <CTAButton color="#7B66FF" bgcolor="white" />

                    <AspectRatio
                        mt={12}
                        w={"40%"}
                        boxShadow={"0 6px 15px 0px rgba(0,0,0,0.5)"}
                    >
                        <video
                            title="banner"
                            src={bannerVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                    </AspectRatio>
                </VStack>
            </section>
        </>
    );
}
