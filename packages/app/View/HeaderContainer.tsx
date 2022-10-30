import React, { useCallback, useState } from 'react'
import { HeaderLayout } from 'app/View/HeaderLayout'

type HeaderContainerProps = {
  onPressHandler: (inputValue: string) => void
  isLoading: boolean
  title?: string
}
export const HeaderContainer: React.FC<HeaderContainerProps> = ({ title = '', onPressHandler, isLoading }) => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const onTextInput = useCallback((value: string) => {
    setInputValue(value)
  }, [inputValue])

  const onPress = useCallback(() => {
    if (inputValue.trim()) {
      onPressHandler(inputValue)
      setInputValue('')
    } else {
      setError('field must not be empty')
    }

  }, [inputValue])

  const clearError = () => {
    if (error) {
      setError('')
    }
  }

  return (
    <HeaderLayout inputValue={inputValue}
                  error={error}
                  isLoading={isLoading}
                  onPressHandler={onPress}
                  onChangeTextHandler={onTextInput}
                  title={title}
                  clearError={clearError}
    />
  )
}

