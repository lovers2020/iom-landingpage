import { Text, Box } from "@chakra-ui/react";
interface fontColor {
    color: string;
    bgcolor: string;
}
export default function CTAButton({ color, bgcolor }: fontColor) {
    return (
        <a href="http://pf.kakao.com/_sXxoPG/chat" target="blank">
            <Box
                bgColor={bgcolor}
                color={color}
                py={2}
                px={[10, 20]}
                fontWeight={"700"}
                borderRadius={3}
            >
                <Text>문의하기</Text>
            </Box>
        </a>
    );
}
