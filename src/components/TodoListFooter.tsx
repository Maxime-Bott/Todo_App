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

    const filterButtonsProps: {[key: string]: any}[] = [
        {
            text: "All",
            filter: "ALL",
            disabledComparator: TodoLength,
        },
        {
            text: "Active",
            filter: "ACTIVE",
            disabledComparator: includesActivatedTodo,
        },
        {
            text: "Completed",
            filter: "COMPLETED",
            disabledComparator: includesCompletedTodo,
        },
    ];

    const $filterButtons: ReactElement = (
        <Box
            d={"flex"}
            w={{base: "60%", sm: "40%"}}
            px={{base: "0.2rem", sm: "0.5rem"}}
            justifyContent={"space-between"}
        >
            {filterButtonsProps.map((btn, i) => {
                const isDisabled: boolean = btn.disabledComparator
                    ? false
                    : true;

                const isActive: boolean = filter === btn.filter;
                return (
                    <Button
                        key={`btn-${i}`}
                        type={"button"}
                        color={
                            isActive ? "brightBlue" : "var(--completed-todo)"
                        }
                        disabled={isDisabled}
                        onClick={() => setFilter(btn.filter)}
                        _hover={{
                            bgColor: "none",
                            color:
                                isDisabled || isActive
                                    ? "none"
                                    : "var(--todo-text)",
                        }}
                    >
                        {btn.text}
                    </Button>
                );
            })}
        </Box>
    );

    return (
        <Box
            d={"flex"}
            bgColor={"var(--bg-todo)"}
            alignItems={"center"}
            justifyContent={"space-between"}
            px={"1rem"}
        >
            <Text
                display={{base: "none", sm: "block"}}
                color={"var(--completed-todo)"}
                fontSize={"0.7rem"}
                fontWeight={"bold"}
            >
                {`${numberOfActivatedTodo} ${
                    !numberOfActivatedTodo ? "item" : "items"
                } left`}
            </Text>

            {$filterButtons}
            <Button
                type={"button"}
                disabled={!includesCompletedTodo ? true : false}
                onClick={() => clearCompletedTodo()}
                color={"var(--completed-todo)"}
                _hover={{
                    bgColor: "none",
                    color: !includesCompletedTodo ? "none" : "var(--todo-tex)",
                }}
            >
                {"Clear Completed"}
            </Button>
        </Box>
    );
};

export default FooterTodoList;
