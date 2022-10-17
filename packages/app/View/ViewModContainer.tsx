import {FC, memo, ReactElement} from "react";
import React from "react";
import {Box, Center} from "native-base";

type TodoContainerProps = {
    children?: ReactElement
}

export const ViewModContainer: FC<TodoContainerProps> = memo(({children}) => {

    return (
        <Center w={"100%"} >
            <Box maxW="360" w="100%" >
                {children}
            </Box>
        </Center>

    )
})

