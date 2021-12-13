import {FC} from "react";

import {
    useColorMode,
    useColorModeValue,
    IconButton,
    IconButtonProps,
} from "@chakra-ui/react";
import {FaMoon, FaSun} from "react-icons/fa";
import {IconType} from "react-icons";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher: FC<ColorModeSwitcherProps> = props => {
    const {toggleColorMode} = useColorMode();
    const text: string = useColorModeValue("dark", "light");
    const SwitchIcon: IconType = useColorModeValue(FaMoon, FaSun);

    return (
        <IconButton
            size={"md"}
            fontSize={"lg"}
            variant={"ghost"}
            color={"#fff"}
            marginLeft={"2"}
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
            aria-label={`Switch to ${text} mode`}
            _active={{bg: "none"}}
            _hover={{bg: "none", color: "#feca57"}}
            _focus={{boxShadow: "none"}}
            {...props}
        />
    );
};
