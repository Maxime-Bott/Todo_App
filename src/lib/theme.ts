import {extendTheme} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";
import {GenericObject} from "@types";

type configProps = {
    initialColorMode: string;
    useSystemColorMode: boolean;
};

const config: configProps = {
    initialColorMode: "light",
    useSystemColorMode: true,
};

const styles: {[key: string]: any} = {
    global: (props: any) => ({
        body: {
            fontSize: "16px",
            bgColor: mode("hsl(0, 0%, 98%)", "hsl(235, 21%, 11%)")(props),
        },
        button: {
            _disabled: {
                _hover: "none",
            },
        },
    }),
};

const fonts: {[key: string]: string} = {
    heading: "Josefin Sans",
    body: "Josefin Sans",
};

const colors: {[key: string]: string} = {
    borderGreyish: "hsl(237, 14%, 26%)",
    placeholderColor: "hsl(233, 14%, 35%)",
    brightBlue: "hsl(220, 98%, 61%)",
    bgGradient: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
    desaturetBlue: "hsl(235, 24%, 19%)",
    hoverBlue: "hsl(236, 33%, 92%)",
};

const components: GenericObject = {
    Checkbox: {
        baseStyle: {
            control: {
                _checked: {
                    border: "none",
                    _hover: {
                        bg: "inerhit",
                        bgGradient:
                            "linear(to-br, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
                        border: "none",
                    },
                    bgGradient:
                        "linear(to-br, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
                },
                borderRadius: "50%",
                _hover: {
                    background:
                        "linear-gradient(hsl(235, 24%, 19%), hsl(235, 24%, 19%)) padding-box, linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box",
                    border: " 2px solid transparent",
                },
                _focus: {
                    boxShadow: "none",
                },
            },
            icon: {
                color: "#fff",
            },
        },
    },
    Input: {
        baseStyle: {
            field: {
                _focus: {
                    boxShadox: "none",
                },
                _placeholder: {
                    color: "placeholderColor",
                },
                "caret-color": "hsl(220, 98%, 61%)",
            },
        },
    },
};

const theme: any = extendTheme({
    config,
    colors,
    styles,
    fonts,
    components,
});

export default theme;
