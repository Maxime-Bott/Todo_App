import {useState, FormEvent, useCallback, useEffect} from "react";

export interface TodoObject {
    todo: string;
    isCompleted: boolean;
    id: string;
}

type TodoArray = TodoObject[];

export interface UseTodoReturnProps {
    filteredTodoList: TodoArray;
    filter: string;
    addTodo: (inputs: TodoObject) => void;
    clearCompletedTodo: () => void;
    deleteTodo: (id: string) => void;
    handleEdit: (e: FormEvent, updatedTodo: TodoObject) => void;
    setFilter: (f: string) => void;
    statusOfTodo: () => {
        includesActivatedTodo: boolean;
        includesCompletedTodo: boolean;
        numberOfActivatedTodo: number;
        TodoLength: number;
    };
}

export const useTodo = (initialValue: TodoArray): UseTodoReturnProps => {
    const [todoList, setTodoList] = useState(initialValue);
    const [filteredTodoList, setFilteredTodoList] = useState(todoList);
    const [filter, setFilter] = useState("ALL");

    const handleFilteredTodoList: () => void = useCallback(() => {
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
    }, [todoList, filter]);

    useEffect(() => {
        handleFilteredTodoList();
    }, [handleFilteredTodoList]);

    return {
        setFilter,
        filteredTodoList,
        filter,
        addTodo: inputs => {
            if (inputs.todo.trim()) {
                setTodoList([...todoList, inputs]);
            }
        },

        clearCompletedTodo: () => {
            setTodoList(todoList.filter((t: TodoObject) => !t.isCompleted));
            setFilter("ALL");
        },

        deleteTodo: id => {
            const newTodo: TodoArray = todoList.filter(todo => todo.id !== id);
            setTodoList(newTodo);
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

            setTodoList(newTodo);
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
                TodoLength: todoList.length,
            };
        },
    };
};
