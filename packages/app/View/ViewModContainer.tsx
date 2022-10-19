import { FC, memo, ReactElement } from 'react'
import React from 'react'
import { Box } from 'native-base'

type TodoContainerProps = {
  children?: ReactElement
}

export const ViewModContainer: FC<TodoContainerProps> = memo(({ children }) => {

  return (
    <Box px={'3'} maxW={'1000'}
         py={'1'} mt={'1'} borderColor={'coolGray.200'} rounded='lg' borderWidth='1'
         _dark={{
           borderColor: 'coolGray.600',
           backgroundColor: 'gray.700'
         }}
         _web={{
           alignSelf: 'center',
           w: '500',
           shadow: 2,
           borderWidth: 2
         }} _light={{
      backgroundColor: 'gray.50'
    }}>
      {children}
    </Box>


  )
})

