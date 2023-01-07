import { Button, IButtonProps, Icon, IIconProps } from 'native-base'
import React, { MutableRefObject } from 'react'

type ActivityIconButton = IButtonProps & { ref?: MutableRefObject<any> } & {
  _icon: IIconProps
  isLoading?: boolean
}
export const ButtonWithLoader: React.FC<ActivityIconButton> = ({ isLoading, _icon, ...buttonProps }) => {
  return (
    <Button
      size={'sm'}
      rounded={'full'}
      isLoading={isLoading}
      {...buttonProps}
    >
      {
        !isLoading ? <Icon color={'warmGray.50'}
                           _web={{ size: '6' }}
                           {..._icon}
          />
          : null
      }
    </Button>
  )
}