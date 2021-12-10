import {FC, FormEvent, ReactElement} from "react";
import {Box} from "@chakra-ui/react";

import InputWithCheckbox from "components/TodoWithCheckbox";

import {useInputs} from "hooks/useInputs";
import {UseTodoProps} from "hooks/useTodo";

const AddTodo: FC<Pick<UseTodoProps, "addTodo">> = ({
    addTodo,
}): ReactElement => {
    const {inputs, handleChange, reset} = useInputs({
        todo: "",
        isCompleted: false,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        addTodo({todo: inputs.todo, isCompleted: inputs.isCompleted});
        reset();
    };

    return (
        <Box w={"100%"}>
            <form onSubmit={handleSubmit}>
                <InputWithCheckbox
                    type={"text"}
                    onChange={handleChange}
                    name={"todo"}
                    value={inputs.todo}
                    placeholder={"Create a new todo..."}
                    checkName={"isCompleted"}
                    checkValue={inputs.isCompleted}
                    withInput={true}
                />
            </form>
        </Box>
    );
};

export default AddTodo;
