import { Box, VStack, Text, Image } from "@chakra-ui/react";
import CTAButton from "../common/CTAButton";
import chatImage from "../../images/chat_talk.png";

export default function Section1() {
    return (
        <>
            <section
                style={{
                    padding: "6rem 0 3rem 0",
                    backgroundColor: "#FFF7E4",
                }}
            >
                <VStack>
                    <Box
                        color={"#000000D9"}
                        fontWeight={"500"}
                        textAlign={"center"}
                    >
                        <Text
                            letterSpacing={-1}
                            lineHeight={"1.3"}
                            fontSize={"2.5rem"}
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
                            fontSize={"1rem"}
                            my={4}
                        >
                            웹사이트 맞춤 제작 저희와 함께 준비하세요.
                        </Text>
                    </Box>
                    <CTAButton />
                    <Box
                        position={"relative"}
                        letterSpacing={-0.1}
                        fontSize={"12px"}
                        fontWeight={600}
                    >
                        <Text
                            color={"black"}
                            bgColor={"white"}
                            display={"inline-block"}
                            px={4}
                            py={1.5}
                            borderRadius={7}
                            position={"absolute"}
                            left={10}
                            top={14}
                        >
                            견적 문의드립니다~
                        </Text>
                        <Image
                            m={"10px auto"}
                            w={"80%"}
                            src={chatImage}
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
