import { Box, CheckCircleIcon, IBoxProps, IInputProps, Input, ITextProps, Pressable, Text } from 'native-base'
import React, { useState } from 'react'

type EditableTextProps = IInputProps & {
  initialValue: string
  textProps?: ITextProps
  boxWrapperProps?: IBoxProps
}
export const EditableText: React.FC<EditableTextProps> = ({
                                                            initialValue,
                                                            boxWrapperProps,
                                                            textProps,
                                                            ...restProps
                                                          }) => {
  const { ...restTextProps } = textProps
  const [inputValue, setInputValue] = useState(initialValue)
  const [editMode, setEditMode] = useState(false)

  const onPressHandler = () => {
    setEditMode(!editMode)
  }

  return <Box {...boxWrapperProps}>
    {
      editMode ?
        <Input onChangeText={setInputValue}
               flexGrow={2}
               size={'md'}
               variant={'underlined'}
               value={inputValue}
               InputRightElement={
                 <Pressable onPress={onPressHandler}>
                   <CheckCircleIcon size={5} mr='2' color='muted.400' />
                 </Pressable>
               }
               {...restProps}
        />
        : <Text{...restTextProps}>{inputValue}</Text>

    } </Box>

}