import { Box, VStack, Text, Image } from "@chakra-ui/react";
import section2Img from "../../images/section2.png";

export default function Section2() {
    return (
        <>
            <section
                style={{
                    padding: "5rem 0",
                    backgroundColor: "#0B213F",
                }}
            >
                <VStack position={"relative"}>
                    <Box
                        position={"relative"}
                        letterSpacing={-0.1}
                        fontSize={"12px"}
                    >
                        <Text
                            color={"black"}
                            bgColor={"#6EC8FB"}
                            display={"inline-block"}
                            px={4}
                            py={1.5}
                            borderRadius={7}
                            position={"absolute"}
                            left={6}
                            top={-6}
                        >
                            현재 진행상황이 어떻게 될까요?
                        </Text>
                        <Text
                            color={"black"}
                            bgColor={"#6EC8FB"}
                            display={"inline-block"}
                            px={4}
                            py={1.5}
                            borderRadius={7}
                            position={"absolute"}
                            left={6}
                            top={4}
                        >
                            일정 내에 가능하시겠죠?..
                        </Text>
                        <Image
                            m={"10px auto"}
                            w={"70%"}
                            src={section2Img}
                            alt="chat"
                        />
                        <Text
                            bgColor={"#3991F2"}
                            display={"inline-block"}
                            px={4}
                            py={1.5}
                            borderRadius={7}
                            position={"absolute"}
                            right={4}
                            bottom={4}
                            textAlign={"center"}
                        >
                            네 고객님 어떤 홈페이지를<br></br> 원하시나요?
                        </Text>
                    </Box>
                </VStack>
            </section>
        </>
    );
}
