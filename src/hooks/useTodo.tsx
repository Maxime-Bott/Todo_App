import {useState} from "react";

interface TodoObject {
    todo: string;
    isCompleted: boolean;
}

export interface TodoProps {
    todo: TodoObject[];
}

export interface AddTodoProps {
    addTodo: (inputs: TodoObject) => void;
}

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
