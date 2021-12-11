import {useState, FormEvent} from "react";

export interface TodoObject {
    todo: string;
    isCompleted: boolean;
    id: string;
}

type TodoArray = TodoObject[];

export interface UseTodoProps {
    filteredTodoList: TodoArray;
    addTodo: (inputs: TodoObject) => void;
    clearCompletedTodo: () => void;
    handleEdit: (e: FormEvent, updatedTodo: TodoObject) => void;
    handleFilter: (f: string) => void;
    statusOfTodo: () => {
        includesActivatedTodo: boolean;
        includesCompletedTodo: boolean;
        numberOfActivatedTodo: number;
    };
}

export const useTodo = (initialValue: TodoArray): UseTodoProps => {
    const [todoList, setTodo] = useState(initialValue);
    const [filteredTodoList, setFilteredTodoList] = useState(todoList);

    return {
        filteredTodoList,
        addTodo: inputs => {
            if (inputs.todo.trim()) {
                setTodo([...todoList, inputs]);
                setFilteredTodoList([...filteredTodoList, inputs]);
            }
        },

        clearCompletedTodo: () => {
            setTodo(todoList.filter((t: TodoObject) => !t.isCompleted));
            setFilteredTodoList(
                todoList.filter((t: TodoObject) => !t.isCompleted),
            );
        },

        handleEdit: (e, updatedTodo) => {
            const newTodo: TodoArray = todoList.map(t => {
                if (t.id === updatedTodo.id) {
                    const {checked} = e.target as HTMLInputElement;
                    updatedTodo.isCompleted = checked;

                    return Object.assign(t, updatedTodo);
                }
                return t;
            });
            setTodo(newTodo);
        },

        handleFilter: filter => {
            switch (filter) {
                case "ALL":
                    setFilteredTodoList(todoList);
                    break;
                case "COMPLETED":
                    setFilteredTodoList(todoList.filter(t => t.isCompleted));
                    break;
                case "ACTIVE":
                    setFilteredTodoList(todoList.filter(t => !t.isCompleted));
                    break;
                default:
                    throw new Error();
            }
        },

        statusOfTodo: () => {
            let includesActivatedTodo: boolean = false;
            let includesCompletedTodo: boolean = false;
            let numberOfActivatedTodo: number = 0;

            for (const td of todoList) {
                if (!td.isCompleted) {
                    includesActivatedTodo = true;
                    numberOfActivatedTodo += 1;
                } else {
                    includesCompletedTodo = true;
                }
            }

            return {
                includesActivatedTodo,
                includesCompletedTodo,
                numberOfActivatedTodo,
            };
        },
    };
};
