import {FC, ReactElement} from "react";
import {Input} from "@chakra-ui/react";
import {useInputs} from "hooks/useInputs";

const AddTodo: FC = (): ReactElement => {
    const {inputs, handleChange, reset} = useInputs({todo: ""});

    const handleSubmit = () => {
        console.log(inputs);
        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input type={"text"} onChange={handleChange} value={inputs.todo}>
                {"Create new todo"}
            </Input>
        </form>
    );
};

export default AddTodo;
