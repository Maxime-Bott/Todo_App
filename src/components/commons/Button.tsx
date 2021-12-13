import {FC, ReactElement} from "react";

import {
    Button as ChakraButton,
    ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

const Button: FC<ChakraButtonProps> = ({children, ...props}): ReactElement => {
    return (
        <ChakraButton
            fontSize={"0.7rem"}
            p={0}
            bg={"none"}
            color={"placeholderColor"}
            _active={{bgColor: "none"}}
            _focus={{boxShadow: "none"}}
            {...props}
        >
            {children}
        </ChakraButton>
    );
};

export default Button;
