import {useState} from "react";

type TodoObject = {
    todo: string;
    isCompleted: boolean;
};

export type UseTodoProps = {
    todo?: TodoObject[];
    addTodo: (inputs: TodoObject) => void;
};

export const useTodo = (initalValues: TodoObject[]): UseTodoProps => {
    const [todo, setTodo] = useState(initalValues);

    return {
        todo,
        addTodo: (inputs: TodoObject) => {
            setTodo([...todo, inputs]);
        },
    };
};
