import { Box, HStack, Text } from "@chakra-ui/react";
import { goToTop, refresh } from "../utils";

export default function Header() {
    function onLogoClick() {
        goToTop();
        refresh();
    }
    return (
        <header>
            <HStack backgroundColor={"#FFF7E4"} p={6} justify={"space-between"}>
                <Text
                    fontSize={"18px"}
                    letterSpacing={0}
                    onClick={onLogoClick}
                    fontWeight="700"
                    color={"black"}
                >
                    Instead Of Me
                </Text>
                <HStack fontSize={"14px"} fontWeight={600}>
                    <Box bgColor={"#242428"} py={1} px={3} borderRadius={7}>
                        <Text>문의하기</Text>
                    </Box>
                    <Box bgColor={"#242428"} py={1} px={3} borderRadius={7}>
                        <Text>포트폴리오</Text>
                    </Box>
                </HStack>
            </HStack>
        </header>
    );
}
