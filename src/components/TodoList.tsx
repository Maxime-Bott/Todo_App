import {FC, ReactElement} from "react";
import {List, Box, ListItem, Text} from "@chakra-ui/react";

import Checkbox from "components/forms/Checkbox";
import {UseTodoProps, TodoObject} from "hooks/useTodo";

const TodoList: FC<
    Pick<UseTodoProps, "clearCompletedTodo" | "todoList" | "handleEdit">
> = ({todoList, clearCompletedTodo, handleEdit}): ReactElement => {
    return (
        <Box>
            <List d={"flex"} flexDir={"column"}>
                {todoList.map((t: TodoObject, i: number) => (
                    <Box key={`todo-item-${i}`}>
                        <ListItem d={"flex"}>
                            <Checkbox
                                name={"isCompleted"}
                                value={t.isCompleted}
                                onChange={e => handleEdit(e, i, t)}
                            />
                            <Text
                                textDecor={
                                    t.isCompleted ? "line-through" : "none"
                                }
                            >
                                {t.todo}
                            </Text>
                        </ListItem>
                    </Box>
                ))}
            </List>
            <button
                type={"button"}
                onClick={() => clearCompletedTodo(todoList)}
            >
                {"Clear"}
            </button>
        </Box>
    );
};

export default TodoList;
