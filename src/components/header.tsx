import { Center, Text } from "@chakra-ui/react";
import { goToTop, refresh } from "../utils";

export default function Header() {
    function onLogoClick() {
        goToTop();
        refresh();
    }
    return (
        <header>
            <Center backgroundColor={"#7B66FF"}>
                <Text
                    fontSize={"24px"}
                    letterSpacing={1}
                    my={8}
                    onClick={onLogoClick}
                    fontWeight="600"
                >
                    Instead of me
                </Text>
            </Center>
        </header>
    );
}
