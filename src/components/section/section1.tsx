import { Box, VStack, Image, Text, Heading } from "@chakra-ui/react";
import banner from "../../images/banner.jpg";
import CTAButton from "../CTAButton";

export default function Section1() {
    return (
        <>
            <section
                style={{
                    paddingTop: "1rem",
                    background:
                        "linear-gradient(to bottom, #7B66FF, #5FBDFF 100%)",
                }}
            >
                <VStack>
                    <Box
                        fontWeight={"500"}
                        fontSize="22px"
                        textAlign={"center"}
                    >
                        <Heading fontSize={"48px"}>
                            <strong>웹사이트 제작</strong>
                        </Heading>
                        <Text>끝까지 책임져드릴게요</Text>
                    </Box>
                    <Box my={4} color={"gray.300"}>
                        <Text textAlign={"center"}>대기업 출신 개발자들이</Text>
                        <Text>책임지고 개발해드려요</Text>
                    </Box>
                    <CTAButton color="#7B66FF" />

                    <Image
                        mt={12}
                        w={"80%"}
                        src={banner}
                        boxShadow={"0 6px 15px 0px rgba(0,0,0,0.5)"}
                    />
                </VStack>
            </section>
        </>
    );
}
