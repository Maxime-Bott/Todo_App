import {FC, FormEvent, ReactElement} from "react";
import {Box, Input, Checkbox, ListItem, Text} from "@chakra-ui/react";
import {Nullable} from "@types";

interface TodoWithCheckboxProps {
    type?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    onChange: (e: FormEvent) => void;
    checkName: string;
    checkValue: any;
    withInput?: boolean;
    isTodoItem?: boolean;
    todoText?: string;
    key?: string;
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
    isTodoItem = true,
    todoText,
}): Nullable<ReactElement> => {
    const $checkbox: ReactElement = (
        <Checkbox
            isChecked={checkValue}
            name={checkName}
            value={checkValue}
            onChange={onChange}
        />
    );

    let $content: Nullable<ReactElement> = null;

    if (withInput) {
        $content = (
            <Box>
                {$checkbox}
                <Input
                    border={"none"}
                    type={type}
                    onChange={onChange}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                />
            </Box>
        );
    }

    if (isTodoItem) {
        $content = (
            <ListItem>
                {$checkbox}
                <Text textDecoration={checkValue ? "line-through" : "none"}>
                    {todoText}
                </Text>
            </ListItem>
        );
    }

    return $content;
};

export default TodoWithCheckbox;
