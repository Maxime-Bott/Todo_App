import {FC, ReactElement} from "react";
import {List, ListItem, Box} from "@chakra-ui/react";
import {Nullable} from "@types";
import {UseTodoProps, TodoObject} from "hooks/useTodo";

const TodoList: FC<Pick<UseTodoProps, "clearCompletedTodo" | "todo">> = ({
    todo,
    clearCompletedTodo,
}): Nullable<ReactElement> => {
    let $content: Nullable<ReactElement> = null;

    if (todo.length > 0) {
        $content = (
            <Box>
                <List d={"flex"} flexDir={"column"}>
                    {todo.map((t: TodoObject, i: number) => {
                        return <ListItem key={`todo-${i}`}>{t.todo}</ListItem>;
                    })}
                </List>
                <button
                    type={"button"}
                    onClick={() => clearCompletedTodo(todo)}
                >
                    {"Clear"}
                </button>
            </Box>
        );
    }

    return $content;
};

export default TodoList;
