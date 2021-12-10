import {useState} from "react";

export interface TodoObject {
    todo: string;
    isCompleted: boolean;
}

type TodoArray = TodoObject[];

export interface UseTodoProps {
    todo: TodoArray;
    addTodo: (inputs: TodoObject) => void;
    clearCompletedTodo: (todo: TodoArray) => void;
}

export const useTodo = (initalValue: TodoArray): UseTodoProps => {
    const [todo, setTodo] = useState(initalValue);

    return {
        todo,
        addTodo: (inputs: TodoObject) => {
            setTodo([...todo, inputs]);
        },
        // eslint-disable-next-line no-shadow
        clearCompletedTodo: (todo: TodoArray) => {
            setTodo(todo.filter((t: TodoObject) => !t.isCompleted));
        },
    };
};
