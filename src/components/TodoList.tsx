import {FC, ReactElement} from "react";
import {List, Box, ListItem, Text} from "@chakra-ui/react";

import Checkbox from "components/forms/Checkbox";
import {UseTodoProps, TodoObject} from "hooks/useTodo";

const TodoList: FC<Pick<UseTodoProps, "clearCompletedTodo" | "todo">> = ({
    todo,
    clearCompletedTodo,
}): ReactElement => {
    return (
        <Box>
            <List d={"flex"} flexDir={"column"}>
                {todo.map((t: TodoObject, i: number) => (
                    <Box key={`todo-item-${i}`}>
                        <ListItem d={"flex"}>
                            <Checkbox
                                name={"isCompleted"}
                                value={t.isCompleted}
                                onChange={() => console.log("")}
                            />
                            <Text>{t.todo}</Text>
                        </ListItem>
                    </Box>
                ))}
            </List>
            <button type={"button"} onClick={() => clearCompletedTodo(todo)}>
                {"Clear"}
            </button>
        </Box>
    );
};

export default TodoList;
