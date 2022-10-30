import React from 'react'
import { Box, Button, HStack, Input } from 'native-base'
import { GestureResponderEvent } from 'react-native'

type HeaderLayoutProps = {
  inputValue: string
  isLoading: boolean
  onPressHandler: ((event: GestureResponderEvent) => void) | null | undefined
  onChangeTextHandler: ((text: string) => void) | undefined
  title: string
  error:string
  clearError:()=>void
}
export const HeaderLayout: React.FC<HeaderLayoutProps> = (props) => {
  const {error,clearError ,isLoading, inputValue, onPressHandler, onChangeTextHandler, title } = props
  return (
    <Box flex={1} bg={'blue.600'} px='1' py='3'>
      <HStack px='1' py='1' space={2}>
        <Input
          flex={1}
          onFocus={clearError}
          size={'2xl'}
          color={error?'rgb(248,4,4)':'rgb(252,252,252)'}
          variant={'underlined'}
          onChangeText={onChangeTextHandler}
          value={error?error:inputValue}
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