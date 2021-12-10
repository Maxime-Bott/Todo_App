import {FC, FormEvent, ReactElement} from "react";
import {Box, Input, Checkbox, Text} from "@chakra-ui/react";

interface TodoWithCheckboxProps {
    type: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (e: FormEvent) => void;
    checkName: string;
    checkValue: any;
    withInput?: boolean;
}

const TodoWithCheckbox: FC<TodoWithCheckboxProps> = ({
    type,
    name,
    value,
    placeholder,
    onChange,
    checkName,
    checkValue,
    withInput = false,
}): ReactElement => {
    let $content: ReactElement = <Text />;

    if (withInput) {
        $content = (
            <Input
                border={"none"}
                type={type}
                onChange={onChange}
                name={name}
                value={value}
                placeholder={placeholder}
                textDecoration={
                    checkValue && !withInput ? "line-through" : "none"
                }
            />
        );
    }

    return (
        <Box>
            <Checkbox
                isChecked={checkValue}
                name={checkName}
                value={checkValue}
                onChange={onChange}
            />
            {$content}
        </Box>
    );
};

export default TodoWithCheckbox;
