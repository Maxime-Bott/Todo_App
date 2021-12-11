import {FC, ReactElement} from "react";
import {Box, useColorModeValue} from "@chakra-ui/react";

import {useTodo} from "hooks/useTodo";

import AddTodo from "components/forms/AddTodo";
import Header from "components/Header";
import TodoList from "components/TodoList";

import darkHeroBanner from "assets/img/bg-desktop-dark.jpg";
import lightHeroBanner from "assets/img/bg-desktop-light.jpg";

const Homepage: FC = (): ReactElement => {
    const {
        todoList,
        filteredTodoList,
        addTodo,
        clearCompletedTodo,
        handleEdit,
        handleFilter,
        statusOfTodo,
    } = useTodo([]);
    const bgImage: string = useColorModeValue(lightHeroBanner, darkHeroBanner);

    return (
        <Box
            bgImage={bgImage}
            bgSize={"contain"}
            bgPosition={"top"}
            backgroundRepeat={"no-repeat"}
            w={"100vw"}
            h={"100vh"}
        >
            <Box w={"35%"} margin={"auto"} d={"flex"} flexDir={"column"}>
                <Header />
                <AddTodo addTodo={addTodo} />
                <TodoList
                    todoList={todoList}
                    filteredTodoList={filteredTodoList}
                    clearCompletedTodo={clearCompletedTodo}
                    handleEdit={handleEdit}
                    handleFilter={handleFilter}
                    statusOfTodo={statusOfTodo}
                />
            </Box>
        </Box>
    );
};

export default Homepage;
