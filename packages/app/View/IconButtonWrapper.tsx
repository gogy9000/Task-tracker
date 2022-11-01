import React from 'react'
import { IconButton, IIconButtonProps } from 'native-base'

type IconButtonWrapperProps = IIconButtonProps & {}
export const IconButtonWrapper: React.FC<IconButtonWrapperProps> = ({ ...restProps }) => {
  return <IconButton
    borderRadius={50}
    variant={'unstyled'}
    // _web={{
    //   size: '5'
    // }}
    _hover={{
      // bg: 'rgb(250,250,250)',
      _icon: {
        _dark:{
          color: 'rgb(255,255,255)'
        },
        _light:{
          color: 'rgb(37,99,234)'
        }

      }
    }}
    _pressed={{
      _icon: {
        _dark:{
          color: 'rgb(37,99,234)'
        },
        _light:{
          color: 'muted.600'
        }
      }
    }}
    {...restProps}
  />
}