import React from 'react'
import {
  useColorMode,
  Tooltip,
  IconButton,
  SunIcon,
  MoonIcon,
} from 'native-base'

export function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Tooltip
      label={colorMode === 'dark' ? 'Enable light mode' : 'Enable dark mode'}
      placement="bottom right"
      openDelay={300}
      closeOnClick={false}
    >
      <IconButton
        variant="unstyled"
        onPress={toggleColorMode}
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon color={'blue.800'}/>}
        accessibilityLabel="Color Mode Switch"
      />
    </Tooltip>
  )
}
