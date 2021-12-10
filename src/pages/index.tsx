import {FC, ReactElement} from "react";
import {Box} from "@chakra-ui/react";

import {useTodo} from "hooks/useTodo";

import AddTodo from "components/forms/AddTodo";
import Header from "components/Header";
import TodoList from "components/TodoList";

const Homepage: FC = (): ReactElement => {
    const {todo, addTodo, clearCompletedTodo} = useTodo([]);

    return (
        <Box>
            <Header />
            <AddTodo addTodo={addTodo} />
            <TodoList todo={todo} clearCompletedTodo={clearCompletedTodo} />
        </Box>
    );
};

export default Homepage;
