import {FC, ReactElement} from "react";
import {Box, Button, Text} from "@chakra-ui/react";
import {UseTodoReturnProps} from "hooks/useTodo";

const FooterTodoList: FC<
    Pick<
        UseTodoReturnProps,
        "handleFilter" | "clearCompletedTodo" | "statusOfTodo"
    >
> = ({handleFilter, clearCompletedTodo, statusOfTodo}): ReactElement => {
    const {
        includesActivatedTodo,
        includesCompletedTodo,
        numberOfActivatedTodo,
        TodoLength,
    } = statusOfTodo();

    return (
        <Box d={"flex"}>
            {numberOfActivatedTodo > 0 && (
                <Text>{`${numberOfActivatedTodo} items left`}</Text>
            )}
            <Button
                type={"button"}
                disabled={TodoLength === 0 ? true : false}
                onClick={() => handleFilter("ALL")}
            >
                {"All"}
            </Button>
            <Button
                type={"button"}
                disabled={includesActivatedTodo ? false : true}
                onClick={() => handleFilter("ACTIVE")}
            >
                {"Active"}
            </Button>
            <Button
                type={"button"}
                disabled={includesCompletedTodo ? false : true}
                onClick={() => handleFilter("COMPLETED")}
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
