import {FC, FormEvent, ReactElement} from "react";
import {Checkbox as ChakraCheckbox} from "@chakra-ui/react";

interface TodoWithCheckboxProps {
    onChange: (e: FormEvent) => void;
    name: string;
    value: any;
}

const Checkbox: FC<TodoWithCheckboxProps> = ({
    onChange,
    name,
    value,
}): ReactElement => {
    return (
        <ChakraCheckbox
            size={"lg"}
            pl={"1rem"}
            isChecked={value}
            name={name}
            value={value}
            onChange={onChange}
            transition={{
                duration: "3000ms",
            }}
        />
    );
};

export default Checkbox;
