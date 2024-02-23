import { Box, VStack, Text, Image, HStack, Center } from "@chakra-ui/react";
import CTAButton from "../CTAButton";
import chatImage from "../../images/chat_talk.png";
import CTAButtonWeb from "../CTAButton_Web";

export default function Section1Web() {
    return (
        <>
            <section
                style={{
                    padding: "8rem 0 9rem 0",
                    backgroundColor: "#FFF7E4",
                }}
            >
                <Center gap={20}>
                    <Box
                        mt={20}
                        color={"#000000D9"}
                        fontWeight={"500"}
                        textAlign={"start"}
                    >
                        <Text
                            letterSpacing={-1}
                            lineHeight={"1.3"}
                            fontSize={"4rem"}
                            fontWeight={"700"}
                        >
                            <strong>
                                웹사이트<br></br>다 만들어드립니다
                            </strong>
                        </Text>

                        <Text
                            color={"rgba(0,0,0,0.6)"}
                            opacity={0.8}
                            fontWeight={"700"}
                            letterSpacing={-0.4}
                            fontSize={"1.5rem"}
                            my={8}
                        >
                            웹사이트 맞춤 제작 저희와 함께 준비하세요.
                        </Text>
                        <CTAButtonWeb />
                    </Box>
                    <Box
                        position={"relative"}
                        letterSpacing={-0.1}
                        fontSize={"18px"}
                        fontWeight={600}
                    >
                        <Text
                            color={"black"}
                            bgColor={"white"}
                            px={4}
                            py={1.5}
                            borderRadius={7}
                            position={"absolute"}
                            left={10}
                            top={20}
                        >
                            견적 문의드립니다~
                        </Text>
                        <Image src={chatImage} alt="chat" />
                        <Text
                            bgColor={"#3991F2"}
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
                </Center>
            </section>
        </>
    );
}
