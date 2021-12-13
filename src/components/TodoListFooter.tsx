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
            w={"40%"}
            px={"0.5rem"}
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
                        color={isActive ? "brightBlue" : "placeholderColor"}
                        disabled={isDisabled}
                        onClick={() => setFilter(btn.filter)}
                        _hover={{
                            bgColor: "none",
                            color: isDisabled || isActive ? "none" : "#fff",
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
            bg={"desaturetBlue"}
            alignItems={"center"}
            justifyContent={"space-between"}
            px={"1rem"}
        >
            <Text color={"placeholderColor"} fontSize={"0.7rem"} w={"20%"}>
                {`${numberOfActivatedTodo} ${
                    !numberOfActivatedTodo ? "item" : "items"
                } left`}
            </Text>

            {$filterButtons}
            <Button
                w={"20%"}
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
