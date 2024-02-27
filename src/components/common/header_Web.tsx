import { Box, HStack, Text } from "@chakra-ui/react";
import { goToTop, refresh } from "../../utils";
import { Link, useNavigate } from "react-router-dom";

interface IbgColor {
    bgColor: boolean;
}

export default function HeaderWeb({ bgColor }: IbgColor) {
    const navigate = useNavigate();
    function onLogoClick() {
        navigate("/");
        goToTop();
    }
    return (
        <nav
            style={{
                position: "fixed",
                top: "0",
                zIndex: "1",
                width: "100%",
                backgroundColor: bgColor ? "hsla(0,0%,100%,0.95)" : "#FFF7E4",
                borderBottom: bgColor ? "1px solid rgba(0,0,0,0.2)" : "none",
                transition: "0.5s",
            }}
        >
            <HStack
                maxWidth={"1280px"}
                m={"auto"}
                w={"100%"}
                p={"16px 100px"}
                justify={"space-between"}
            >
                <Text
                    cursor={"pointer"}
                    fontSize={"18px"}
                    letterSpacing={0}
                    onClick={onLogoClick}
                    fontWeight="700"
                    color={"black"}
                >
                    Instead Of Me
                </Text>
                <HStack fontSize={"14px"} fontWeight={600}>
                    <Box>
                        <a
                            href="http://pf.kakao.com/_sXxoPG/chat"
                            target="blank"
                            style={{ cursor: "pointer" }}
                        >
                            <Text
                                bgColor={"#242428"}
                                py={2}
                                px={4}
                                borderRadius={10}
                            >
                                문의하기
                            </Text>
                        </a>
                    </Box>
                    <Box
                        bgColor={"#F2EAD8"}
                        _hover={{
                            bgColor: "rgba(0,0,0,.178)",
                            transition: "0.3s",
                        }}
                        borderRadius={10}
                    >
                        <Link to="portfolio" style={{ cursor: "pointer" }}>
                            <Text color={"rgba(0,0,0,0.6)"} py={2} px={4}>
                                포트폴리오
                            </Text>
                        </Link>
                    </Box>
                </HStack>
            </HStack>
        </nav>
    );
}
