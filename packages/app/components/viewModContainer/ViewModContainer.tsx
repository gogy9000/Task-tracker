import { FC, memo, ReactElement } from 'react'
import React from 'react'
import { Box, Pressable } from 'native-base'

type TodoContainerProps = {
  children?: ReactElement
  width?:number
  onPress?:()=>void
}

export const ViewModContainer: FC<TodoContainerProps> = memo(({onPress, children }) => {
return <Pressable onPress={onPress}>
  {
    ({isHovered,isPressed})=>{
      return (
        <Box px={'3'}   w={"sm"} alignSelf={'center'}
             py={'5'} mt={'1'} borderColor={'coolGray.200'}
             rounded='lg' borderWidth='1'
             _dark={{
               borderColor: 'warmGray.600',
               backgroundColor: 'warmGray.700'
             }}
             _light={{
               backgroundColor:isPressed?'gray.300':'gray.200'
             }}
             _web={{
               _light:{backgroundColor:isHovered?'gray.200':'gray.100'},
               w: 'md',
               shadow: 2,
               borderWidth: 2
             }}
        >
          {children}
        </Box>
      )
    }
  }
</Pressable>

})

