import "@fontsource/josefin-sans";

import {ReactElement} from "react";
import {ChakraProvider} from "@chakra-ui/react";

import {ColorModeSwitcher} from "./ColorModeSwitcher";
import theme from "lib/theme";

export const App = (): ReactElement => {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeSwitcher justifySelf={"flex-end"} />
        </ChakraProvider>
    );
};
