import React, { FC, memo, useCallback } from 'react'
import { HeaderContainer } from 'app/components/commonHeader/HeaderContainer'
import { Api } from 'app/DAL/Api'

type HeaderByTodoListProps = {

}

export const HeaderByTodoList: FC<HeaderByTodoListProps> = memo(() => {

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


