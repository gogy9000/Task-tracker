import React from 'react'
import { Center, Heading,Text } from 'native-base'
import { useDimensions } from '@react-native-community/hooks'

type EmptyContentType={
  errorMessage:string
}
export const EmptyContent:React.FC<EmptyContentType>= ({errorMessage}) => {

  const { height } = useDimensions().screen

  return (
    <Center h={height * 0.6}>
      <Heading>
        O curva! list is empty!
      </Heading>
      <Text>
        {errorMessage}
      </Text>

    </Center>
  )
}
