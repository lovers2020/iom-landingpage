import { Box, Center, Grid, Image, Text, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import cafe from "../images/coffee.png";
import logi from "../images/logistics.png";
import flower from "../images/flower.png";
import hospital from "../images/hospital.png";
import tax from "../images/accountant.png";
import glamping from "../images/glamping.png";

const figList = [cafe, flower, glamping, logi, tax, hospital];
const urls = [
    "https://jh0152park.github.io/instead_of_me_cafe",
    "https://jh0152park.github.io/instead_of_me_flower_shop",
    "https://jh0152park.github.io/instead_of_me_glamping",
    "https://yuhyeon0516.github.io/Instead_of_me_logistics",
    "https://yuhyeon0516.github.io/Instead_of_me_tax-accountant",
    "https://lovers2020.github.io/instead_of_me_hospital",
];
const linkName = ["카페", "꽃집", "글램핑", "물류", "세무", "치과"];

const PortfolioText = styled(motion.p)`
    letter-spacing: -0.5px;
    font-weight: 900;
`;

const textVariants = {
    start: { opacity: 0, y: 100 },
    end: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 0.4,
        },
    },
    exit: {
        y: 0,
        opacity: 1,
    },
};

export default function Portfolio() {
    return (
        <>
            <VStack
                bgColor={"#FFFFFF"}
                maxWidth={"1280px"}
                margin={"auto"}
                mt={20}
                px={[10, 24]}
                alignItems={"flex-start"}
                color={"#0b213f"}
            >
                <AnimatePresence>
                    <Box fontSize={["2rem", "3.5rem"]} py={[4, 10]}>
                        <PortfolioText
                            variants={textVariants}
                            initial="start"
                            animate="end"
                            exit="exit"
                        >
                            PORTFOLIO
                        </PortfolioText>
                    </Box>
                </AnimatePresence>
                <Grid
                    gridTemplateColumns={["repeat(2,1fr)", "repeat(3,1fr)"]}
                    gap={[6, 10]}
                    pb={10}
                >
                    {figList.map((current, index) => (
                        <Center
                            flexDir={"column"}
                            textAlign={"center"}
                            role="group"
                        >
                            <a href={`${urls[index]}/`} target="blank">
                                <Image
                                    _groupHover={{
                                        transform: "translateY(-15px)",
                                        transition: "all .3s",
                                    }}
                                    w={["140px", "420px"]}
                                    h={["140px", "400px"]}
                                    src={current}
                                />
                                <Text
                                    mt={[2, 4]}
                                    fontSize={["16px", "20px"]}
                                    fontWeight={400}
                                    letterSpacing={-1.5}
                                >
                                    {linkName[index]}
                                </Text>
                            </a>
                        </Center>
                    ))}
                </Grid>
            </VStack>
        </>
    );
}
