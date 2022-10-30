import { Box, IBoxProps } from 'native-base'
import React from 'react'

type CustomDividerProps = IBoxProps & {}
export const CustomDivider: React.FC<CustomDividerProps> = ({ ...restProps }) => {
  return (
    <Box
         w={'full'}
         h={'1'}
         // borderStyle={'none'}
         borderBottomColor={'black'}
         borderWidth={'1'}
         {...restProps}
    />
  )
}