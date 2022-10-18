import { StyleSheet, View, StatusBar, TextInput, Dimensions } from 'react-native'
import { BACKGROUNDCOLOR, HEIGHT, PADDING, TEXTCOLOR, WIDTH } from '../common/Variables'
import { FC, memo, useCallback, useEffect, useState } from 'react'
import { CustomButton } from '../common/CustomButton'
import React from 'react'
import { Api } from '../DAL/Api'
import { Box, Button, HStack, Input } from 'native-base'

type HeaderProps = {
  // createTodoHandler: (newTodoTitle: string) => void
}

export const Header: FC<HeaderProps> = memo(() => {
  const [inputValue, setInputValue] = useState('')
  // const {data} = Api.useAuthMeQuery()
  const [createTodo, { isLoading }] = Api.usePostTodoMutation()

  // const createTodoHandler = useCallback((newTodoTitle: string) => {
  //     createTodo(newTodoTitle)
  // }, [])

  const onTextInput = useCallback((value: string) => {
    setInputValue(value)
  }, [inputValue])

  const onCreateTodo = useCallback(() => {
    createTodo(inputValue)
    setInputValue('')
  }, [inputValue])

  // useEffect(() => {
  //     if (data && data.resultCode === 1) {
  //         navigation.navigate("Login")
  //     }
  // }, [data])

  return (
    <Box flex={1} bg={'blue.600'} px='1' py='3'>
      <HStack px='1' py='1' space={2}>
        <Input
          flex={1}
          size={'2xl'}
          color={'rgb(255,255,255)'}
          variant={'underlined'}
          onChangeText={onTextInput}
          value={inputValue}
          placeholderTextColor={'rgb(255,255,255)'}
          placeholder={'Todo...'}
          _focus={{ borderColor: 'rgb(255,255,255)' }}
        />
        <Button variant={'ghost'}
                isLoading={isLoading}
                isDisabled={isLoading}
                isLoadingText={'fetching'}
                colorScheme={'rgb(255,255,255)'}
                onPress={onCreateTodo}
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
          Create todo
        </Button>
      </HStack>
    </Box>
  )
})
