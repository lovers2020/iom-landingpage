import { FaArrowRight } from "react-icons/fa";
import { HStack } from "@chakra-ui/react";

export default function CTAButton() {
    return (
        <a
            href="http://pf.kakao.com/_sXxoPG/chat"
            target="blank"
            style={{ cursor: "pointer" }}
        >
            <HStack
                bgColor={"#242428"}
                color={"white"}
                py={3}
                px={4}
                borderRadius={15}
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
