import { Box, VStack, Text, Image } from "@chakra-ui/react";
import peoples from "../../images/peoples.png";
import CTAButton from "../CTAButton";

export default function Section3Web() {
    return (
        <>
            <section
                style={{ padding: "3rem 0 3rem 0", backgroundColor: "#96EFFF" }}
            >
                <VStack>
                    <Box
                        fontWeight={"400"}
                        textAlign={"center"}
                        color={"black"}
                    >
                        <h1 style={{ fontSize: "18px", fontWeight: "700" }}>
                            <strong>
                                인터넷 공간이지만<br></br> 의뢰를 맡기는
                                사람들이 어떤 사람들인지
                            </strong>
                            <br></br>투명하게 보여드려야 된다는 생각이 있습니다.
                        </h1>
                        <Text></Text>
                    </Box>
                    <VStack textAlign={"center"} color={"gray.700"}>
                        <Image w={"50%"} src={peoples} />
                        <Text fontSize={"20px"} fontWeight={"500"}>
                            저희는 삼성전자 출신으로 총 3명으로 구성
                            되어있습니다.
                        </Text>
                        <Text fontSize={"18px"} fontWeight={"500"}>
                            개발자, QA, 엔지니어 업무를 8년이상 담당하였습니다.
                        </Text>
                        <Text fontSize={"16px"} fontWeight={"500"}>
                            이 페이지를 제작한 저는 QA 업무를 담당했었지만
                            <br></br> 지금은 개발자로 일하고 있습니다.
                        </Text>
                        <Text mt={1} fontSize={"20px"} fontWeight={"500"}>
                            회사에서 일하는 동안 <br></br>미친듯이{" "}
                            <strong style={{ fontWeight: "600" }}>
                                고객 만족
                            </strong>
                            을 위해 노력했습니다.
                        </Text>
                        <Text fontWeight={"500"}>
                            그 결과 고객님들이 어떤 것을 원하는 지 알게 되었고
                            <br></br>항상 고객님들의 입장에서 바라보게
                            되었습니다.
                        </Text>
                        <Text mb={4} fontSize={"18px"} fontWeight={"700"}>
                            프로젝트 시작 전 저희가 작성한 기획안을<br></br>
                            고객님과 직접 하나 하나 확인하며<br></br>
                            꼼꼼하게 제작해드리겠습니다!
                        </Text>
                        <CTAButton />
                    </VStack>
                </VStack>
            </section>
        </>
    );
}
