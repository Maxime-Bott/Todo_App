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
        ":root": {
            "--bg-todo": mode("#fff", "#25273c")(props),
            "--text-todo": mode("#4a485d", "#fafafa")(props),
            "--completed-todo": mode("#d6d5da", "#4d5066")(props),
            "--add-todo": mode("#777a92", "#4d5066")(props),
            "--border-color": mode("#d6d5da", "#393a4c")(props),
            "--hover-footer": mode("#4a485d", "#fff")(props),
        },
        body: {
            fontSize: "16px",
            bgColor: mode("#fafafa", "hsl(235, 21%, 11%)")(props),
        },
        button: {
            _disabled: {
                _hover: "none",
            },
        },
        h2: {
            color: mode("hsl(0, 0%, 98%)", "#fafafa")(props),
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
};

const components: GenericObject = {
    Checkbox: {
        baseStyle: (props: any) => ({
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
                    background: mode(
                        "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box",
                        "linear-gradient(hsl(235, 24%, 19%), hsl(235, 24%, 19%)) padding-box, linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box",
                    )(props),
                    border: " 2px solid transparent",
                },
                _focus: {
                    boxShadow: "none",
                },
            },
            icon: {
                color: "#fff",
            },
        }),
    },
    Input: {
        baseStyle: {
            field: {
                _focus: {
                    boxShadox: "none",
                },
                _placeholder: {
                    color: "var(--add-todo)",
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
