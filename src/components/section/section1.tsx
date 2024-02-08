import { Box, VStack, Image, Text, Heading } from "@chakra-ui/react";
import banner from "../../images/banner.jpg";

export default function Section1() {
    return (
        <>
            <section style={{ paddingTop: "1rem" }}>
                <VStack>
                    <Box
                        fontWeight={"500"}
                        fontSize="24px"
                        textAlign={"center"}
                    >
                        <Heading>
                            <b>웹사이트 제작</b>
                        </Heading>
                        <Text>끝까지 책임져드립니다.</Text>
                    </Box>
                    <Box my={4} color={"gray.200"}>
                        <Text textAlign={"center"}>대기업 출신 개발자들이</Text>
                        <Text>책임지고 개발해드립니다.</Text>
                    </Box>

                    <a href="http://pf.kakao.com/_sXxoPG/chat">
                        <Box
                            bgColor={"white"}
                            color={"#2C71FC"}
                            py={2}
                            px={5}
                            mb={12}
                            fontWeight={"600"}
                            borderRadius={3}
                        >
                            <Text>문의하기</Text>
                        </Box>
                    </a>

                    <Image
                        w={"80%"}
                        src={banner}
                        boxShadow={"0 6px 15px 0px rgba(0,0,0,0.5)"}
                    />
                </VStack>
            </section>
        </>
    );
}
