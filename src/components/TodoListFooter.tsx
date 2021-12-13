import {FC, ReactElement} from "react";
import {Box, Text} from "@chakra-ui/react";

import Button from "components/commons/Button";

import {UseTodoReturnProps} from "hooks/useTodo";

const FooterTodoList: FC<
    Pick<
        UseTodoReturnProps,
        "setFilter" | "clearCompletedTodo" | "statusOfTodo" | "filter"
    >
> = ({setFilter, filter, clearCompletedTodo, statusOfTodo}): ReactElement => {
    const {
        includesActivatedTodo,
        includesCompletedTodo,
        numberOfActivatedTodo,
        TodoLength,
    } = statusOfTodo();

    return (
        <Box
            d={"flex"}
            bg={"desaturetBlue"}
            alignItems={"center"}
            justifyContent={"space-between"}
            px={"1rem"}
        >
            {numberOfActivatedTodo > 0 && (
                <Text color={"placeholderColor"} fontSize={"0.7rem"} w={"20%"}>
                    {`${numberOfActivatedTodo} items left`}
                </Text>
            )}
            <Box
                d={"flex"}
                w={"40%"}
                px={"0.5rem"}
                justifyContent={"space-between"}
            >
                <Button
                    type={"button"}
                    color={filter === "ALL" ? "brightBlue" : "placeholderColor"}
                    disabled={TodoLength === 0 ? true : false}
                    handleClick={() => setFilter("ALL")}
                >
                    {"All"}
                </Button>
                <Button
                    type={"button"}
                    color={
                        filter === "ACTIVE" ? "brightBlue" : "placeholderColor"
                    }
                    disabled={includesActivatedTodo ? false : true}
                    handleClick={() => setFilter("ACTIVE")}
                >
                    {"Active"}
                </Button>
                <Button
                    type={"button"}
                    color={
                        filter === "COMPLETED"
                            ? "brightBlue"
                            : "placeholderColor"
                    }
                    disabled={includesCompletedTodo ? false : true}
                    handleClick={() => setFilter("COMPLETED")}
                >
                    {"Completed"}
                </Button>
            </Box>
            <Button
                w={"20%"}
                type={"button"}
                disabled={!includesCompletedTodo ? true : false}
                handleClick={() => clearCompletedTodo()}
            >
                {"Clear Completed"}
            </Button>
        </Box>
    );
};

export default FooterTodoList;
