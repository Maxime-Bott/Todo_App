import {extendTheme} from "@chakra-ui/react";

type configProps = {
    initialColorMode: string;
    useSystemColorMode: boolean;
};

const config: configProps = {
    initialColorMode: "light",
    useSystemColorMode: true,
};

const styles: {[key: string]: any} = {
    body: {
        fontSize: "18px",
    },
};

const fonts: {[key: string]: any} = {
    heading: "Josefin Sans",
    body: "Josefin Sans",
};

const colors: {[key: string]: string} = {
    brightBlue: "hsl(220, 98%, 61%)",
    bgGradient: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
    desaturetBlue: "hsl(235, 24%, 19%)",
    hoverBlue: "hsl(236, 33%, 92%)",
};

const theme: any = extendTheme({
    config,
    colors,
    styles,
    fonts,
});

export default theme;
