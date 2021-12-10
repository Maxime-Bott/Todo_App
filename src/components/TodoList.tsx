import {FC, ReactElement} from "react";
import {List, Box} from "@chakra-ui/react";

import {UseTodoProps, TodoObject} from "hooks/useTodo";
import TodoWithCheckbox from "components/TodoWithCheckbox";

const TodoList: FC<Pick<UseTodoProps, "clearCompletedTodo" | "todo">> = ({
    todo,
    clearCompletedTodo,
}): ReactElement => {
    return (
        <Box>
            <List d={"flex"} flexDir={"column"}>
                {todo.map((t: TodoObject, i: number) => (
                    <TodoWithCheckbox
                        key={`todo-${i}`}
                        todoText={t.todo}
                        onChange={() => console.log("TODO: OnChange")}
                        checkName={"isCompleted"}
                        checkValue={t.isCompleted}
                    />
                ))}
            </List>
            <button type={"button"} onClick={() => clearCompletedTodo(todo)}>
                {"Clear"}
            </button>
        </Box>
    );
};

export default TodoList;
