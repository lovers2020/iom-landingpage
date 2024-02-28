import { BsInstagram } from "react-icons/bs";
import { RiKakaoTalkLine } from "react-icons/ri";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";

export default function Footer() {
    return (
        <>
            <footer>
                <Box bgColor={"#F7F7F7"}>
                    <HStack
                        justify={"space-between"}
                        color={"#000000"}
                        px={[10, 100]}
                        py={10}
                        maxWidth={"1280px"}
                        margin={"auto"}
                    >
                        <VStack
                            alignItems={"flex-start"}
                            fontSize={["12px", "16px"]}
                            letterSpacing={0}
                            fontWeight={500}
                        >
                            <Text
                                fontSize={"24px"}
                                fontWeight={700}
                                letterSpacing={-0.5}
                                mb={2}
                            >
                                Instead Of Me
                            </Text>
                            <Text>
                                상호명 : 인스테드오브미 | 대표 : 김유현<br></br>
                                사업자등록번호 : 442-54-00852
                                <br></br>이메일 : insteadofme.yuhyeon@gmail.com
                                <br></br>© InsteadOfMe. All Rights Reserved.
                            </Text>
                        </VStack>
                        <HStack>
                            <Box fontSize={["30px", "40px"]}>
                                <a
                                    href="http://pf.kakao.com/_sXxoPG/chat"
                                    target="blank"
                                >
                                    <RiKakaoTalkLine />
                                </a>
                            </Box>
                            <Box fontSize={["24px", "30px"]}>
                                <a
                                    href="https://www.instagram.com/_instead_of_me/"
                                    target="blank"
                                >
                                    <BsInstagram />
                                </a>
                            </Box>
                        </HStack>
                    </HStack>
                </Box>
            </footer>
        </>
    );
}
