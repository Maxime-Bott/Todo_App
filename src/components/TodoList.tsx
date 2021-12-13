import {Nullable} from "@types";
import {FC, ReactElement} from "react";
import {List, Box, ListItem, Text} from "@chakra-ui/react";

import {UseTodoReturnProps, TodoObject} from "hooks/useTodo";

import Checkbox from "components/forms/Checkbox";
import TodoListFooter from "components/TodoListFooter";

const TodoList: FC<Omit<UseTodoReturnProps, "addTodo">> = ({
    filteredTodoList,
    clearCompletedTodo,
    handleEdit,
    setFilter,
    filter,
    statusOfTodo,
}): ReactElement => {
    let $content: Nullable<ReactElement> = (
        <Text>{"Your todo list is empty."}</Text>
    );

    if (filteredTodoList.length > 0) {
        $content = (
            <List d={"flex"} flexDir={"column"} bg={"desaturetBlue"}>
                {filteredTodoList.map((todo: TodoObject, i: number) => {
                    return (
                        <Box
                            key={`todo-item-${i}`}
                            h={"3.4rem"}
                            d={"flex"}
                            alignItems={"center"}
                            borderBottom={"1px solid"}
                            borderColor={"borderGreyish"}
                        >
                            <ListItem d={"flex"}>
                                <Checkbox
                                    name={"isCompleted"}
                                    value={todo.isCompleted}
                                    onChange={e => handleEdit(e, todo)}
                                />
                                <Text
                                    px={4}
                                    textDecor={
                                        todo.isCompleted
                                            ? "line-through"
                                            : "none"
                                    }
                                    color={
                                        todo.isCompleted
                                            ? "placeholderColor"
                                            : "#fff"
                                    }
                                >
                                    {todo.todo}
                                </Text>
                            </ListItem>
                        </Box>
                    );
                })}
            </List>
        );
    }

    return (
        <Box mt={"1rem"}>
            {$content}
            <TodoListFooter
                clearCompletedTodo={clearCompletedTodo}
                setFilter={setFilter}
                statusOfTodo={statusOfTodo}
                filter={filter}
            />
        </Box>
    );
};

export default TodoList;
