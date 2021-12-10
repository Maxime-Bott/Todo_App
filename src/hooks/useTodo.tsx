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

export const useTodo = (initalValue: TodoObject[]): UseTodoProps => {
    const [todo, setTodo] = useState(initalValue);

    return {
        todo,
        addTodo: (inputs: TodoObject) => {
            setTodo([...todo, inputs]);
        },
    };
};
