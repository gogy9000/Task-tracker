import React from "react";
import { Center, Heading, useBreakpointValue } from 'native-base'
import { HEIGHT } from 'app/common/Variables'
import { Dimensions } from 'react-native'

export const EmptyContent = () => {

    const {height}=Dimensions.get("screen")


    return (
        <Center h={height*0.6}>
            <Heading>
                O curva! list is empty!
            </Heading>
        </Center>
    )
}
