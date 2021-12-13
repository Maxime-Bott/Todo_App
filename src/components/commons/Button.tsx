import {FC, ReactElement} from "react";

import {
    Button as ChakraButton,
    ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
    handleClick: () => void;
}

const Button: FC<ButtonProps> = ({
    type = "button",
    disabled = false,
    handleClick,
    children,
    ...props
}): ReactElement => {
    return (
        <ChakraButton
            fontSize={"0.7rem"}
            p={0}
            type={type}
            disabled={disabled}
            onClick={handleClick}
            bg={"none"}
            color={"placeholderColor"}
            _hover={{bgColor: "none", color: "#fff"}}
            _active={{bgColor: "none"}}
            _focus={{boxShadow: "none"}}
            {...props}
        >
            {children}
        </ChakraButton>
    );
};

export default Button;
