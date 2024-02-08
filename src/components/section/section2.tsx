import { Box, VStack, Text, Heading } from "@chakra-ui/react";

export default function Section2() {
    return (
        <>
            <section style={{ paddingTop: "3rem", backgroundColor: "white" }}>
                <VStack>
                    <Box
                        fontWeight={"400"}
                        textAlign={"center"}
                        color={"black"}
                    >
                        <h1 style={{ fontSize: "22px", fontWeight: "600" }}>
                            웹사이트가 필요하셔서 들어오셨겠죠?
                        </h1>
                        <Text>
                            소통이 잘 되지않아 결과물이<br></br> 마음에 들지
                            않으셨던 적이 있으셨죠!
                        </Text>
                    </Box>
                    <Box
                        my={4}
                        color={"black"}
                        fontWeight={"600"}
                        fontSize={"20px"}
                    >
                        <Text>저희와 함께 해보시지 않으실래요?</Text>
                    </Box>
                </VStack>
            </section>
        </>
    );
}
