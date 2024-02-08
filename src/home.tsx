import { Box, Grid } from "@chakra-ui/react";

export default function Home() {
    return (
        <>
            <Box px={80} py={80} bgColor={"whitesmoke"} h="100vh">
                <Grid
                    columnGap={10}
                    templateColumns={{
                        sm: "1fr",
                        md: "1fr 1fr",
                        lg: "repeat(3,1fr)",
                        xl: "repeat(4,1fr)",
                        "2xl": "repeat(5,1fr)",
                    }}
                >
                    {[1, 2, 3, 4, 5].map((current) => (
                        <Box
                            width={"300px"}
                            height={"400px"}
                            bgColor={"green"}
                        ></Box>
                    ))}
                </Grid>
            </Box>
        </>
    );
}
