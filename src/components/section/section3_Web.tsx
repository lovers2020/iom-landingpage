import { VStack, Text, Image, Center, Box } from "@chakra-ui/react";
import section3 from "../../images/section3.png";
import CTAButtonWeb from "../CTAButton_Web";

export default function Section3Web() {
    return (
        <>
            <section
                style={{ padding: "8rem 0 9rem 0", backgroundColor: "#FEFBF5" }}
            >
                <Center gap={160}>
                    <VStack
                        color={"#0B213F"}
                        fontWeight={400}
                        fontSize={"20px"}
                        letterSpacing={0}
                        alignItems={"flex-start"}
                    >
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
                                인터넷 공간이지만,<br></br> 의뢰를 맡기는
                                사람들이 어떤 사람들인지<br></br> 투명하게
                                보여드려야 된다는 생각이 있습니다.
                            </Text>

                            <Text>
                                회사에서 일하는 동안 미친듯이<br></br>
                                고객 감동, 고객 만족을 위해 노력했습니다.
                            </Text>
                            <Text>
                                그 결과 고객님들이 어떤 것을 원하시는 지 알게
                                되었고
                                <br></br>항상 고객님들의 입장에서 바라보게
                                되었습니다.
                            </Text>
                            <Text mb={4} fontWeight={"700"}>
                                프로젝트 시작 전 저희가 작성한 기획안을<br></br>
                                고객님과 직접 하나 하나 확인하며<br></br>
                                꼼꼼하게 제작해드리겠습니다!
                            </Text>
                        </Box>
                        <CTAButtonWeb />
                    </VStack>
                    <Image
                        boxShadow={"4px 4px 4px 2px rgba(0,0,0,0.2)"}
                        w={"25%"}
                        src={section3}
                    />
                </Center>
            </section>
        </>
    );
}
