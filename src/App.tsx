import "@fontsource/josefin-sans";
import "lib/scrollbar.css";

import {ReactElement} from "react";
import {ChakraProvider} from "@chakra-ui/react";

import Homepage from "pages";
import theme from "lib/theme";

export const App = (): ReactElement => {
    return (
        <ChakraProvider theme={theme}>
            <Homepage />
        </ChakraProvider>
    );
};
