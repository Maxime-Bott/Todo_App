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
            color={"current"}
            marginLeft={"2"}
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
            aria-label={`Switch to ${text} mode`}
            {...props}
        />
    );
};
