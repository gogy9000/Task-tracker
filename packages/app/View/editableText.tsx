import { Box, CheckCircleIcon, HStack, IBoxProps, IInputProps, Input, ITextProps, Pressable, Text } from 'native-base'
import React, { useState } from 'react'
import { IconButtonWrapper } from 'app/View/IconButtonWrapper'

type EditableTextProps = IInputProps & {
  initialValue: string
  textProps?: ITextProps
  boxWrapperProps?: IBoxProps
  onPressButton?:(text:string)=>void
}
export const EditableText: React.FC<EditableTextProps> = ({
                                                            initialValue,
                                                            boxWrapperProps,
                                                            textProps,
                                                            onPressButton,
                                                            ...restProps
                                                          }) => {
  const { ...restTextProps } = textProps
  const [inputValue, setInputValue] = useState(initialValue)
  const [editMode, setEditMode] = useState(false)
  const [error,setError]=useState('')

  const onPressHandler = () => {
    setEditMode(!editMode)
  }
  const fetchText = () => {
    if(inputValue.trim()){
      onPressButton&& onPressButton(inputValue)
      setEditMode(!editMode)
    }else {
        setError('value must be not empty string')
    }
  }
  const onFocusInput=()=>{
    if(error){
      setError('')
    }
  }

  return (
    <Pressable>
      {({ isHovered }) =>
        <HStack alignItems={'center'}
                {...boxWrapperProps}>
          {
            editMode
              ?
              <>
                {error&&<Text color={'red.400'}>{error}</Text>}
                <Input onChangeText={setInputValue}
                       onFocus={onFocusInput}
                       multiline
                       p={0}
                       flex={1}
                       size={'md'}
                       variant={'unstyled'}
                       value={inputValue}
                       {...restProps}
                />

                <IconButtonWrapper
                  onPress={fetchText}
                  icon={<CheckCircleIcon size={5} mr='2' color='rgb(37,99,234)' />}
                />

              </>
              :
              < >
                <Text onPress={onPressHandler}
                      flex={1}
                      {...restTextProps}
                >
                  {inputValue}
                </Text>
                <IconButtonWrapper
                  onPress={onPressHandler}
                  icon={
                    <CheckCircleIcon
                      size={5}
                      mr='2'
                      color={isHovered ? 'muted.400' : 'white'} />}
                />
              </>
          } </HStack>
      }</Pressable>
  )

}