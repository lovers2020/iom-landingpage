import { FaArrowRight } from "react-icons/fa";
import { Text, Box, HStack } from "@chakra-ui/react";

export default function CTAButton() {
    return (
        <a href="http://pf.kakao.com/_sXxoPG/chat" target="blank">
            <HStack
                bgColor={"#242428"}
                color={"white"}
                py={3}
                px={[4, 10]}
                borderRadius={10}
                mt={4}
                fontSize={"16px"}
                fontWeight={600}
                letterSpacing={0.2}
            >
                <span>무료로 상담받기</span>
                <FaArrowRight />
            </HStack>
        </a>
    );
}
