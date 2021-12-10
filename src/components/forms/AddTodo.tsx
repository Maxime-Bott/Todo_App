import {FC, FormEvent, ReactElement} from "react";
import {Input} from "@chakra-ui/react";

import {useInputs} from "hooks/useInputs";
import {UseTodoProps} from "hooks/useTodo";

const AddTodo: FC<Pick<UseTodoProps, "addTodo">> = ({
    addTodo,
}): ReactElement => {
    const {inputs, handleChange, reset} = useInputs({todo: ""});

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        addTodo({todo: inputs.todo, isCompleted: false});
        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type={"text"}
                onChange={handleChange}
                name={"todo"}
                value={inputs.todo}
                placeholder={"Create a new todo..."}
            />
        </form>
    );
};

export default AddTodo;
