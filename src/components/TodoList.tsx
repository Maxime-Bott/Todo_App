import {Nullable} from "@types";
import {FC, ReactElement} from "react";
import {List, Box, ListItem, Text, IconButton} from "@chakra-ui/react";
import {VscClose} from "react-icons/vsc";

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
    deleteTodo,
}): ReactElement => {
    let $todoList: Nullable<ReactElement> = (
        <Box
            minH={"3.4rem"}
            d={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderBottom={"1px solid"}
            borderColor={"var(--border-color)"}
            color={"var(--text-todo)"}
        >
            <Text>{"Your todo list is empty."}</Text>
        </Box>
    );

    if (filteredTodoList.length > 0) {
        $todoList = (
            <List d={"flex"} flexDir={"column"}>
                {filteredTodoList.map((todo: TodoObject, i: number) => {
                    return (
                        <Box
                            key={`todo-item-${i}`}
                            minH={"3.4rem"}
                            d={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            borderBottom={"1px solid"}
                            borderColor={"var(--border-color)"}
                        >
                            <ListItem d={"flex"} alignItems={"center"}>
                                <Checkbox
                                    name={"isCompleted"}
                                    value={todo.isCompleted}
                                    onChange={e => handleEdit(e, todo)}
                                />
                                <Box display={"flex"} flexWrap={"wrap"}>
                                    <Text
                                        wordBreak={"break-all"}
                                        px={4}
                                        textDecor={
                                            todo.isCompleted
                                                ? "line-through"
                                                : "none"
                                        }
                                        color={
                                            todo.isCompleted
                                                ? "var(--completed-todo)"
                                                : "var(--text-todo)"
                                        }
                                    >
                                        {todo.todo}
                                    </Text>
                                </Box>
                            </ListItem>
                            <IconButton
                                aria-label={"delete-btn"}
                                onClick={() => deleteTodo(todo.id)}
                                icon={<VscClose color={"hsl(236, 9%, 61%)"} />}
                                bg={"none"}
                                _hover={{bg: "none"}}
                                _focus={{boxShadow: "none"}}
                                _active={{bg: "none"}}
                            />
                        </Box>
                    );
                })}
            </List>
        );
    }

    return (
        <Box
            my={"1.5rem"}
            bg={"var(--bg-todo)"}
            boxShadow={"xl"}
            borderRadius={"4px"}
        >
            {$todoList}
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
