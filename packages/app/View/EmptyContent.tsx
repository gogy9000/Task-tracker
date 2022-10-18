import React from "react";
import { Center, Heading, useBreakpointValue } from 'native-base'
import { useDimensions } from '@react-native-community/hooks'



// let newHook;
//
// (async () => {
//
//   const { useDimensions } = await import('@react-native-community/hooks');
//   newHook = useDimensions;
// })();

export const EmptyContent = () => {

  const {height}=useDimensions().screen


    return (
        <Center h={height*0.6}>
            <Heading>
                O curva! list is empty!
            </Heading>
        </Center>
    )
}
