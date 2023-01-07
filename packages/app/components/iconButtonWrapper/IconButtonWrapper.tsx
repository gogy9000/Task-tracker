import React from 'react'
import { IconButton, IIconButtonProps } from 'native-base'

type IconButtonWrapperProps = IIconButtonProps & {}
export const IconButtonWrapper: React.FC<IconButtonWrapperProps> = ({ ...restProps }) => {
  return <IconButton
    borderRadius={50}
    variant={'custom'}
    {...restProps}
  />
}