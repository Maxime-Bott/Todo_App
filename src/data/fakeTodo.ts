import {TodoObject} from "hooks/useTodo";

export const fakeTodo: TodoObject[] = [
    {todo: "Hello World", isCompleted: false, id: `id-${Date.now()}`},
    {
        todo: "Thanks for your watching",
        isCompleted: false,
        id: `id-2-${Date.now()}`,
    },
    {todo: "Good Bye", isCompleted: true, id: `id-3-${Date.now()}`},
];
