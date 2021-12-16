import {TodoObject} from "hooks/useTodo";

export const fakeTodo: TodoObject[] = [
    {todo: "Loading", isCompleted: true, id: `id-${Date.now()}`},
    {todo: "Hello World", isCompleted: false, id: `id-1${Date.now()}`},
    {
        todo: "Thanks for watching",
        isCompleted: false,
        id: `id-2-${Date.now()}`,
    },
    {todo: "See you 🙋‍♂️", isCompleted: false, id: `id-3-${Date.now()}`},
];
