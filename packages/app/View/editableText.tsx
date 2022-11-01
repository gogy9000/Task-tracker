import {
  Box,
  CheckCircleIcon,
  HStack,
  IBoxProps,
  IInputProps,
  Input,
  ITextProps,
  Pressable,
  Stack,
  Text
} from 'native-base'
import React, { useState } from 'react'
import { IconButtonWrapper } from 'app/View/IconButtonWrapper'
import { ResponsiveValue } from 'native-base/lib/typescript/components/types'
import { ISizes } from 'native-base/lib/typescript/theme/base/sizes'

type EditableTextProps = {
  initialValue?: string
  textProps?: ITextProps
  boxWrapperProps?: IBoxProps
  onPressButton?: (text: string) => void
  inputProps?: IInputProps
  isLoading?: boolean
  fontSize?: ResponsiveValue<ISizes | (string & {}) | number>
  controlledEditMode?: boolean
  setControlledEditMode?: (boolean) => void
}
export const EditableText: React.FC<EditableTextProps> = ({
                                                            initialValue = '',
                                                            boxWrapperProps,
                                                            textProps,
                                                            inputProps,
                                                            onPressButton,
                                                            isLoading,
                                                            fontSize = 'md',
                                                            controlledEditMode,
                                                            setControlledEditMode
                                                          }) => {
  const [inputValue, setInputValue] = useState<string>(initialValue)
  const [editMode, setEditMode] = useState(false)
  const [error, setError] = useState('')

  const onPressHandler = () => {
    setEditMode(!editMode)
    setControlledEditMode&&setControlledEditMode(!editMode)
  }
  const fetchText = () => {
    if (inputValue === initialValue) {
      setEditMode(!editMode)
      setControlledEditMode&&setControlledEditMode(!editMode)
      return
    }
    if (!inputValue.trim()) {
      setError('value must be not empty string')
      return
    }
    onPressButton && onPressButton(inputValue)
    setEditMode(!editMode)
    setControlledEditMode&&setControlledEditMode(!editMode)
  }

  const onFocusInput = () => {
    if (error) {
      setError('')
    }
  }

  if (controlledEditMode||editMode) {
    return (
      <Box flexDirection={'row'} alignItems={'center'} {...boxWrapperProps}>
        <Text color={'red.400'} {...textProps}>{error}</Text>
        <Input onChangeText={setInputValue}
               onFocus={onFocusInput}
               multiline
               autoFocus={editMode}
               isFocused={editMode}
               textAlignVertical={'bottom'}
               p={0}
               flex={1}
               fontSize={fontSize}
               variant={'unstyled'}
               value={inputValue}
               {...inputProps}
        />
        <IconButtonWrapper
          onPress={fetchText}
          pb={0}
          isDisabled={isLoading}
          disabled={isLoading}
          icon={<CheckCircleIcon size={5} color='rgb(37,99,234)' />}
        />
      </Box>
    )
  } else {
    return (
      <Box flexDirection={'row'} alignItems={'center'} {...boxWrapperProps} >
        <Text onPress={onPressHandler}
              fontSize={fontSize}
              flex={1}
              {...textProps}
        >
          {inputValue}
        </Text>
        <IconButtonWrapper
          onPress={onPressHandler}
          isDisabled={isLoading}
          disabled={isLoading}
          pb={0}
          icon={
            <CheckCircleIcon
              size={5}
              color={'muted.500'} />}
        />
      </Box>
    )
  }
}