import React, { useCallback, useEffect, useState } from 'react'
import { Api } from 'app/DAL/Api'
import { useRouter } from 'solito/router'
import { HeaderLayout } from 'app/View/HeaderLayout'

type HeaderContainerProps = {
  onPressHandler: (inputValue: string) => void
  isLoading: boolean
  title?: string
}
export const HeaderContainer: React.FC<HeaderContainerProps> = ({ title = '', onPressHandler, isLoading }) => {
  const [inputValue, setInputValue] = useState('')
  const [error,setError]=useState('')
  const { data: authData } = Api.useAuthMeQuery()
  const router = useRouter()

  useEffect(() => {
    if (authData && authData.resultCode === 1) {
      router.push('/login')
    }
  }, [authData])
  const onTextInput = useCallback((value: string) => {
    setInputValue(value)
  }, [inputValue])
  console.log('error: ',error)
  console.log('input: ',inputValue)

  const onPress = useCallback(() => {
    if(inputValue.trim()){
      onPressHandler(inputValue)
      setInputValue('')
    }else {
      setError('field must not be empty')
    }

  }, [inputValue])

  const clearError = () => {
    if(error){
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