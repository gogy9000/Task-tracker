import React, { FC, memo, useCallback } from 'react'
import { Api } from '../DAL/Api'
import { HeaderContainer } from 'app/View/HeaderContainer'

type HeaderProps = {

}

export const HeaderByTodoList: FC<HeaderProps> = memo(() => {

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

