import {Nullable} from "@types";
import {FC, ReactElement} from "react";
import {List, Box, ListItem, Text} from "@chakra-ui/react";

import {UseTodoReturnProps, TodoObject} from "hooks/useTodo";

import Checkbox from "components/forms/Checkbox";
import FooterTodoList from "components/TodoListFooter";

const TodoList: FC<Omit<UseTodoReturnProps, "addTodo">> = ({
    filteredTodoList,
    clearCompletedTodo,
    handleEdit,
    handleFilter,
    statusOfTodo,
}): ReactElement => {
    let $content: Nullable<ReactElement> = (
        <Text>{"Your todo list is empty."}</Text>
    );

    if (filteredTodoList.length > 0) {
        $content = (
            <List d={"flex"} flexDir={"column"}>
                {filteredTodoList.map((todo: TodoObject, i: number) => {
                    return (
                        <Box key={`todo-item-${i}`}>
                            <ListItem d={"flex"}>
                                <Checkbox
                                    name={"isCompleted"}
                                    value={todo.isCompleted}
                                    onChange={e => handleEdit(e, todo)}
                                />
                                <Text
                                    textDecor={
                                        todo.isCompleted
                                            ? "line-through"
                                            : "none"
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
        <Box>
            {$content}
            <FooterTodoList
                clearCompletedTodo={clearCompletedTodo}
                handleFilter={handleFilter}
                statusOfTodo={statusOfTodo}
            />
        </Box>
    );
};

export default TodoList;
