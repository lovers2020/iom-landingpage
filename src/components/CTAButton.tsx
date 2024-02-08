import { Text, Box } from "@chakra-ui/react";
interface fontColor {
    color: string;
}
export default function CTAButton({ color }: fontColor) {
    return (
        <a href="http://pf.kakao.com/_sXxoPG/chat" target="blank">
            <Box
                bgColor={"white"}
                color={color}
                py={2}
                px={10}
                fontWeight={"700"}
                borderRadius={3}
            >
                <Text>문의하기</Text>
            </Box>
        </a>
    );
}
