import React from 'react'
import { IconButton, IIconButtonProps } from 'native-base'

type IconButtonWrapperProps = IIconButtonProps & {}
export const IconButtonWrapper: React.FC<IconButtonWrapperProps> = ({ ...restProps }) => {
  return <IconButton
                     borderRadius={50}
                     _web={{
                       size: '5'
                     }}
                     _hover={{
                       bg: 'rgb(250,250,250)',
                       _icon: {
                         color: 'rgb(37,99,234)'
                       }
                     }}
                     _pressed={{
                       _web: {
                         bg: 'rgb(255,255,255)'
                       },
                       bg: 'rgba(37,99,234,0.3)'
                     }}
                     {...restProps}
  />
}