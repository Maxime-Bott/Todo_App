import {FC, FormEvent, ReactElement} from "react";
import {Box, Input} from "@chakra-ui/react";

import Checkbox from "components/forms/Checkbox";

import {useInputs} from "hooks/useInputs";
import {UseTodoReturnProps} from "hooks/useTodo";

const AddTodo: FC<Pick<UseTodoReturnProps, "addTodo">> = ({
    addTodo,
}): ReactElement => {
    const {inputs, handleChange, reset} = useInputs({
        todo: "",
        isCompleted: false,
        id: "",
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        addTodo({
            todo: inputs.todo,
            isCompleted: inputs.isCompleted,
            id: `id-${Date.now()}`,
        });
        reset();
    };

    return (
        <Box w={"100%"}>
            <form onSubmit={handleSubmit}>
                <Box d={"flex"}>
                    <Checkbox
                        name={"isCompleted"}
                        value={inputs.isCompleted}
                        onChange={handleChange}
                    />
                    <Input
                        border={"none"}
                        type={"text"}
                        onChange={handleChange}
                        name={"todo"}
                        value={inputs.todo}
                        placeholder={"Create a new todo ..."}
                    />
                </Box>
            </form>
        </Box>
    );
};

export default AddTodo;
