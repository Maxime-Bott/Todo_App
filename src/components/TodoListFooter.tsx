import {FC, ReactElement} from "react";
import {Box, Button, Text} from "@chakra-ui/react";
import {UseTodoReturnProps} from "hooks/useTodo";

const FooterTodoList: FC<
    Pick<
        UseTodoReturnProps,
        "setFilter" | "clearCompletedTodo" | "statusOfTodo"
    >
> = ({setFilter, clearCompletedTodo, statusOfTodo}): ReactElement => {
    const {
        includesActivatedTodo,
        includesCompletedTodo,
        numberOfActivatedTodo,
        TodoLength,
    } = statusOfTodo();

    return (
        <Box d={"flex"} bg={"desaturetBlue"}>
            {numberOfActivatedTodo > 0 && (
                <Text>{`${numberOfActivatedTodo} items left`}</Text>
            )}
            <Button
                type={"button"}
                disabled={TodoLength === 0 ? true : false}
                onClick={() => setFilter("ALL")}
            >
                {"All"}
            </Button>
            <Button
                type={"button"}
                disabled={includesActivatedTodo ? false : true}
                onClick={() => setFilter("ACTIVE")}
            >
                {"Active"}
            </Button>
            <Button
                type={"button"}
                disabled={includesCompletedTodo ? false : true}
                onClick={() => setFilter("COMPLETED")}
            >
                {"Completed"}
            </Button>
            <Button
                type={"button"}
                disabled={!includesCompletedTodo ? true : false}
                onClick={() => clearCompletedTodo()}
            >
                {"Clear Completed"}
            </Button>
        </Box>
    );
};

export default FooterTodoList;
