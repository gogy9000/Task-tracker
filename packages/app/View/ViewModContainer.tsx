import { FC, memo, ReactElement } from 'react'
import React from 'react'
import { Box } from 'native-base'
import { useDimensions } from '@react-native-community/hooks'

type TodoContainerProps = {
  children?: ReactElement
  width?:number
}

export const ViewModContainer: FC<TodoContainerProps> = memo(({ children }) => {

  return (
    <Box px={'3'} w={'360'} m={'1'} alignSelf={'center'}
         py={'5'} mt={'1'} borderColor={'coolGray.200'}
         rounded='lg' borderWidth='1'
         _dark={{
           borderColor: 'warmGray.600',
           backgroundColor: 'warmGray.700'
         }}
         _light={{
           backgroundColor: 'gray.200'
         }}
         _web={{
           w: 'md',
           shadow: 2,
           borderWidth: 2
         }}

    >
      {children}
    </Box>


  )
})

