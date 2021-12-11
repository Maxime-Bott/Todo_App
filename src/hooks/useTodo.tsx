import {useState, FormEvent} from "react";

export interface TodoObject {
    todo: string;
    isCompleted: boolean;
}

type TodoArray = TodoObject[];

export interface UseTodoProps {
    todoList: TodoArray;
    filteredTodoList: TodoArray;
    addTodo: (inputs: TodoObject) => void;
    clearCompletedTodo: (todo: TodoArray) => void;
    handleEdit: (e: FormEvent, index: number, updatedTodo: TodoObject) => void;
    handleFilter: (f: string) => void;
}

export const useTodo = (initialValue: TodoArray): UseTodoProps => {
    const [todoList, setTodo] = useState(initialValue);
    const [filteredTodoList, setFilteredTodoList] = useState(todoList);

    return {
        todoList,
        filteredTodoList,
        addTodo: inputs => {
            if (inputs.todo.trim()) {
                setTodo([...todoList, inputs]);
                setFilteredTodoList([...filteredTodoList, inputs]);
            }
        },
        // eslint-disable-next-line no-shadow
        clearCompletedTodo: todoList => {
            setTodo(todoList.filter((t: TodoObject) => !t.isCompleted));
            setFilteredTodoList(
                todoList.filter((t: TodoObject) => !t.isCompleted),
            );
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
    };
};
