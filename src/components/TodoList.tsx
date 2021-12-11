import {FC, ReactElement} from "react";
import {List, Box, ListItem, Text, Button} from "@chakra-ui/react";

import Checkbox from "components/forms/Checkbox";
import {UseTodoProps, TodoObject} from "hooks/useTodo";

const TodoList: FC<Omit<UseTodoProps, "addTodo">> = ({
    filteredTodoList,
    clearCompletedTodo,
    handleEdit,
    handleFilter,
    statusOfTodo,
}): ReactElement => {
    const {
        includesActivatedTodo,
        includesCompletedTodo,
        numberOfTodoActivated,
    } = statusOfTodo();

    console.log(
        includesActivatedTodo,
        includesCompletedTodo,
        numberOfTodoActivated,
    );

    return (
        <Box>
            <List d={"flex"} flexDir={"column"}>
                {filteredTodoList.map((t: TodoObject, i: number) => {
                    return (
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
                    );
                })}
            </List>
            <Box>
                <Button type={"button"} onClick={() => clearCompletedTodo()}>
                    {"Clear"}
                </Button>
                <Button type={"button"} onClick={() => handleFilter("ALL")}>
                    {"All"}
                </Button>
                <Button type={"button"} onClick={() => handleFilter("ACTIVE")}>
                    {"Active"}
                </Button>
                <Button
                    type={"button"}
                    onClick={() => handleFilter("COMPLETED")}
                >
                    {"Completed"}
                </Button>
            </Box>
        </Box>
    );
};

export default TodoList;
