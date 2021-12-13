import {FC, ReactElement} from "react";
import {Box, useColorModeValue} from "@chakra-ui/react";

import {useTodo} from "hooks/useTodo";

import AddTodo from "components/forms/AddTodo";
import Header from "components/Header";
import TodoList from "components/TodoList";

import {fakeTodo} from "data/fakeTodo";
import darkHeroBanner from "assets/img/bg-desktop-dark.jpg";
import lightHeroBanner from "assets/img/bg-desktop-light.jpg";

const Homepage: FC = (): ReactElement => {
    const {
        filteredTodoList,
        filter,
        addTodo,
        clearCompletedTodo,
        handleEdit,
        setFilter,
        statusOfTodo,
    } = useTodo(fakeTodo);

    const bgImage: string = useColorModeValue(lightHeroBanner, darkHeroBanner);

    return (
        <Box minH={"100vh"}>
            <Box
                w={"100%"}
                h={"35vh"}
                bgImage={bgImage}
                bgSize={"cover"}
                bgPosition={"top"}
                backgroundRepeat={"no-repeat"}
                position={"absolute"}
                zIndex={"-1"}
            />
            <Box
                w={{base: "90vw", md: "70vw", lg: "45vw"}}
                margin={"auto"}
                d={"flex"}
                flexDir={"column"}
            >
                <Header />
                <AddTodo addTodo={addTodo} />
                <TodoList
                    filter={filter}
                    filteredTodoList={filteredTodoList}
                    clearCompletedTodo={clearCompletedTodo}
                    handleEdit={handleEdit}
                    setFilter={setFilter}
                    statusOfTodo={statusOfTodo}
                />
            </Box>
        </Box>
    );
};

export default Homepage;
