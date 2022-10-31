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

type EditableTextProps = {
  initialValue: string
  textProps?: ITextProps
  boxWrapperProps?: IBoxProps
  onPressButton?: (text: string) => void
  inputProps?: IInputProps
  isLoading: boolean
}
export const EditableText: React.FC<EditableTextProps> = ({
                                                            initialValue,
                                                            boxWrapperProps,
                                                            textProps,
                                                            inputProps,
                                                            onPressButton,
                                                            isLoading
                                                          }) => {
  const { ...restTextProps } = textProps
  const [inputValue, setInputValue] = useState(initialValue)
  const [editMode, setEditMode] = useState(false)
  const [error, setError] = useState('')

  const onPressHandler = () => {
    setEditMode(!editMode)
  }
  const fetchText = () => {
    if (inputValue.trim()) {
      onPressButton && onPressButton(inputValue)
      setEditMode(!editMode)
    } else {
      setError('value must be not empty string')
    }
  }
  const onFocusInput = () => {
    if (error) {
      setError('')
    }
  }
  if (editMode) {
    return (
      <Box flexDirection={'row'} alignItems={'center'} {...boxWrapperProps}>
        <Text color={'red.400'} {...restTextProps}>{error}</Text>
        <Input onChangeText={setInputValue}
               onFocus={onFocusInput}
               multiline
               p={0}
               flex={1}
               size={'md'}
               variant={'unstyled'}
               value={inputValue}
               {...inputProps}
        />
        <IconButtonWrapper
          onPress={fetchText}
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
              flex={1}
              {...restTextProps}
        >
          {inputValue}
        </Text>
        <IconButtonWrapper
          onPress={onPressHandler}
          isDisabled={isLoading}
          disabled={isLoading}
          icon={
            <CheckCircleIcon
              size={5}
              color={'muted.500'} />}
        />
      </Box>
    )
  }
}