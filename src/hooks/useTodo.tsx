import {useState, FormEvent} from "react";

export interface TodoObject {
    todo: string;
    isCompleted: boolean;
}

type TodoArray = TodoObject[];

export interface UseTodoProps {
    todoList: TodoArray;
    addTodo: (inputs: TodoObject) => void;
    clearCompletedTodo: (todo: TodoArray) => void;
    handleEdit: (e: FormEvent, index: number, updatedTodo: TodoObject) => void;
}

export const useTodo = (initialValue: TodoArray): UseTodoProps => {
    const [todoList, setTodo] = useState(initialValue);

    return {
        todoList,
        addTodo: (inputs: TodoObject) => {
            if (inputs.todo.trim()) {
                setTodo([...todoList, inputs]);
            }
        },
        // eslint-disable-next-line no-shadow
        clearCompletedTodo: (todoList: TodoArray) => {
            setTodo(todoList.filter((t: TodoObject) => !t.isCompleted));
        },
        handleEdit: (e, index, updatedTodo) => {
            const newTodo: TodoArray = todoList.map((t, i) => {
                if (index === i) {
                    const {checked} = e.target as HTMLInputElement;
                    updatedTodo.isCompleted = checked;

                    return Object.assign(t, updatedTodo);
                }
                return t;
            });
            setTodo(newTodo);
        },
    };
};
