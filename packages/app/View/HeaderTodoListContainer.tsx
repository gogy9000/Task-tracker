import { StyleSheet, View, StatusBar, TextInput, Dimensions, GestureResponderEvent } from 'react-native'
import { BACKGROUNDCOLOR, HEIGHT, PADDING, TEXTCOLOR_PRIMARY, WIDTH } from '../common/Variables'
import { FC, memo, useCallback, useEffect, useState } from 'react'
import { CustomButton } from '../common/CustomButton'
import React from 'react'
import { Api } from '../DAL/Api'
import { Box, Button, HStack, Input } from 'native-base'
import { useRouter } from 'solito/router'

type HeaderProps = {
  // createTodoHandler: (newTodoTitle: string) => void
}

export const HeaderTodoListContainer: FC<HeaderProps> = memo(() => {
  const [inputValue, setInputValue] = useState('')
  const {data:authData} = Api.useAuthMeQuery()
  const [createTodo, { isLoading }] = Api.usePostTodoMutation()
  const router=useRouter()

  const onTextInput = useCallback((value: string) => {
    setInputValue(value)
  }, [inputValue])

  const onCreateTodo = useCallback(() => {
    createTodo(inputValue)
    setInputValue('')
  }, [inputValue])

  useEffect(() => {
      if (authData && authData.resultCode === 1) {
        router.push('/login')
      }
  }, [authData])

  return (
    <HeaderLayout inputValue={inputValue}
                  isLoading={isLoading}
                  onPressHandler={onCreateTodo}
                  onChangeTextHandler={onTextInput}
                  title={'todo'}
    />
  )
})

type HeaderLayoutProps={
  inputValue:string
  isLoading:boolean
  onPressHandler:((event: GestureResponderEvent) => void) | null | undefined
  onChangeTextHandler:((text: string) => void) | undefined
  title:string
}

const HeaderLayout:React.FC<HeaderLayoutProps> = (props) => {
const {isLoading,inputValue,onPressHandler,onChangeTextHandler,title}=props
  return (
    <Box flex={1} bg={'blue.600'} px='1' py='3'>
      <HStack px='1' py='1' space={2}>
        <Input
          flex={1}
          size={'2xl'}
          color={'rgb(255,255,255)'}
          variant={'underlined'}
          onChangeText={onChangeTextHandler}
          value={inputValue}
          placeholderTextColor={'rgb(255,255,255)'}
          placeholder={`${title}...`}
          _focus={{ borderColor: 'rgb(255,255,255)' }}
        />
        <Button variant={'ghost'}
                isLoading={isLoading}
                isDisabled={isLoading}
                isLoadingText={'fetching'}
                colorScheme={'rgb(255,255,255)'}
                onPress={onPressHandler}
                _hover={{
                  bg: 'white.100:alpha.10'
                }}
                _spinner={{
                  color: 'white'
                }}
                _loading={{
                  bg: 'white.100:alpha.10',
                  _text: {
                    color: 'rgb(255,255,255)'
                  }
                }}
        >
          {`Create ${title}`}
        </Button>
      </HStack>
    </Box>
  )
}
