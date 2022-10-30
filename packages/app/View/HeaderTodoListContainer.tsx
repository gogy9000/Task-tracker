import React, { FC, memo, useCallback, useEffect, useState } from 'react'
import { Api } from '../DAL/Api'
import { useRouter } from 'solito/router'
import { HeaderLayout } from 'app/View/HeaderLayout'

type HeaderProps = {

}

export const HeaderTodoListContainer: FC<HeaderProps> = memo(() => {

  const [createTodo, { isLoading }] = Api.usePostTodoMutation()

  const onCreateTodo = useCallback((inputValue:string) => {
    createTodo(inputValue)

  }, [])

  return (
    <HeaderContainer
      onPressHandler={onCreateTodo}
      isLoading={isLoading}
      title={'todo'}
    />
  )
})
type HeaderContainerProps={
  onPressHandler:(inputValue:string)=>void
  isLoading:boolean
  title?:string
}
const HeaderContainer:React.FC<HeaderContainerProps> = ({title='',onPressHandler,isLoading}) => {


  const [inputValue, setInputValue] = useState('')
  const {data:authData} = Api.useAuthMeQuery()
  const router=useRouter()

  useEffect(() => {
    if (authData && authData.resultCode === 1) {
      router.push('/login')
    }
  }, [authData])
  const onTextInput = useCallback((value: string) => {
    setInputValue(value)
  }, [inputValue])

  const onPress=useCallback(()=>{
    onPressHandler(inputValue)
  },[inputValue])


  return(
    <HeaderLayout inputValue={inputValue}
                  isLoading={isLoading}
                  onPressHandler={onPress}
                  onChangeTextHandler={onTextInput}
                  title={title}
    />
  )
}

