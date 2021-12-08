import {FC, ReactElement} from "react";
import {Box} from "@chakra-ui/react";
import Header from "components/header";

const Homepage: FC = (): ReactElement => {
    return (
        <Box>
            <Header />
        </Box>
    );
};

export default Homepage;
