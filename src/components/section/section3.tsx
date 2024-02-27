import { Box, VStack, Text, Image } from "@chakra-ui/react";
import section3 from "../../images/section3.png";
import CTAButton from "../common/CTAButton";

export default function Section3() {
    return (
        <>
            <section
                style={{ padding: "3rem 1.5rem", backgroundColor: "#FEFBF5" }}
            >
                <VStack letterSpacing={0} color={"#0B213F"} fontWeight={500}>
                    <h1
                        style={{
                            fontSize: "1.8rem",
                            color: "#0B213F",
                            fontWeight: "700",
                            marginBottom: "1rem",
                        }}
                    >
                        <strong>저희는 삼성전자 출신입니다</strong>
                    </h1>
                    <Box opacity={0.8}>
                        <Text>
                            인터넷 공간이지만,<br></br> 의뢰를 맡기는 사람들이
                            어떤 사람들인지<br></br> 투명하게 보여드려야 된다는
                            생각이 있습니다.
                        </Text>
                    </Box>
                    <Image
                        boxShadow={"4px 4px 4px 2px rgba(0,0,0,0.2)"}
                        w={"80%"}
                        src={section3}
                    />

                    <VStack alignItems={"flex-start"} pl={6} opacity={0.8}>
                        <Text mt={4}>
                            회사에서 일하는 동안 미친듯이<br></br>
                            고객 감동, 고객 만족을 위해 노력했습니다.
                        </Text>
                        <Text>
                            그 결과 고객님들이 어떤 것을 원하시는 지 알게 되었고
                            항상 고객님들의 입장에서 바라보게 되었습니다.
                        </Text>
                        <Text mb={4} fontWeight={"700"}>
                            프로젝트 시작 전 저희가 작성한 기획안을<br></br>
                            고객님과 직접 하나 하나 확인하며<br></br>
                            꼼꼼하게 제작해드리겠습니다!
                        </Text>
                    </VStack>
                    <CTAButton />
                </VStack>
            </section>
        </>
    );
}
