import {FC, ReactElement} from "react";
import {List, ListItem} from "@chakra-ui/react";
import {Nullable} from "@types";
import {TodoProps} from "hooks/useTodo";

const TodoList: FC<TodoProps> = ({todo}): Nullable<ReactElement> => {
    let $content: Nullable<ReactElement> = null;

    if (todo.length > 0) {
        $content = (
            <List d={"flex"} flexDir={"column"}>
                {todo.map((t, i) => {
                    return <ListItem key={`todo-${i}`}>{t.todo}</ListItem>;
                })}
            </List>
        );
    }

    return $content;
};

export default TodoList;
