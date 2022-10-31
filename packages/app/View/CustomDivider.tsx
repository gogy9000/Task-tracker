import { Box, IBoxProps } from 'native-base'
import React from 'react'
import { ColorType } from 'native-base/lib/typescript/components/types'

type CustomDividerProps = IBoxProps & {
  color?:ColorType
}
export const CustomDivider: React.FC<CustomDividerProps> = ({color='black', ...restProps }) => {
  return (
    <Box
         w={'full'}
         h={'1'}
         _web={{
           borderStyle:'none',
           borderBottomStyle:'solid'
         }}
         borderColor={"contrastThreshold"}
         borderBottomColor={color}
         borderWidth={'1'}
         {...restProps}
    />
  )
}