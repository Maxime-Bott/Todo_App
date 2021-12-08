import {useState} from "react";

type TodoObject = {
    todo: string;
    isCompleted: boolean;
};

export type TodoProps = {
    todo: TodoObject[];
};

export type AddTodoProps = {
    addTodo: (inputs: TodoObject) => void;
};

type UseTodoProps = TodoProps & AddTodoProps;

export const useTodo = (initalValues: TodoObject[]): UseTodoProps => {
    const [todo, setTodo] = useState(initalValues);

    return {
        todo,
        addTodo: (inputs: TodoObject) => {
            setTodo([...todo, inputs]);
        },
    };
};
