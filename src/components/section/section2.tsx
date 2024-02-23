import { Box, VStack, Text, Image, Heading } from "@chakra-ui/react";
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
                            color={"black"}
                            bgColor={"#6EC8FB"}
                            px={4}
                            py={1.5}
                            borderRadius={7}
                            position={"absolute"}
                            right={4}
                            bottom={4}
                            textAlign={"center"}
                        >
                            빠른 답변 부탁드려요.{"😤"}
                        </Text>
                    </Box>

                    <VStack letterSpacing={-0.5} alignItems={"flex-start"}>
                        <Heading color={"#ABDCFF"}>
                            의사소통, 정말 중요합니다
                        </Heading>
                        <Box
                            opacity={0.7}
                            color={"#a0afbd"}
                            fontWeight={500}
                            mt={4}
                            alignItems={"flex-start"}
                        >
                            <Text>
                                일부 책임감 없는 제작 업체들과 다르게<br></br>{" "}
                                제작 이후 사후관리까지 확실하게 책임지겠습니다.
                            </Text>
                            <Text mt={2}>
                                매일 진행상황 공유는 물론이며,<br></br> 연락
                                주시면 10분 내로 꼭 답변드리겠습니다.
                            </Text>
                            <Text mt={2}>
                                고객님과의 소통을 통해 더 나은 서비스를<br></br>
                                제공하고자 끊임없이 노력합니다.
                            </Text>
                            <Text mt={2}>
                                의견이나 질문이 있으시면 언제든지 말씀해주세요!
                            </Text>
                        </Box>
                    </VStack>
                </VStack>
            </section>
        </>
    );
}
