import {ReactElement, FC} from "react";
import {ColorModeSwitcher} from "components/ColorModeSwitcher";
import {Box, Heading} from "@chakra-ui/react";

const Header: FC = (): ReactElement => {
    return (
        <Box
            as={"header"}
            d={"flex"}
            justifyContent={"space-between"}
            w={"100%"}
            mt={"4rem"}
        >
            <Heading as={"h1"} d={"none"}>
                {"Todo List Application"}
            </Heading>
            <Heading as={"h2"} letterSpacing={"12px"}>
                {"TODO"}
            </Heading>
            <ColorModeSwitcher />
        </Box>
    );
};

export default Header;
