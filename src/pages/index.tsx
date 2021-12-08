import {FC, ReactElement} from "react";
import {Box} from "@chakra-ui/react";

import AddTodo from "components/forms/AddTodo";
import Header from "components/Header";

import {useTodo} from "hooks/useTodo";

const Homepage: FC = (): ReactElement => {
    const {addTodo} = useTodo([]);

    return (
        <Box>
            <Header />
            <AddTodo addTodo={addTodo} />
        </Box>
    );
};

export default Homepage;
