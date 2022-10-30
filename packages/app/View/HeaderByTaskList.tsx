import React, { FC, memo, useCallback } from 'react'
import { Api } from 'app/DAL/Api'
import { HeaderContainer } from 'app/View/HeaderContainer'

type HeaderByTaskListProps = {
  todoId:string
}
export const HeaderByTaskList: FC<HeaderByTaskListProps> = memo(({todoId}) => {

  const [creatTask, { isLoading }] = Api.usePostTaskMutation()

  const onCreateTodo = useCallback((inputValue: string) => {
    creatTask({ todolistId: todoId, title: inputValue })
  }, [])

  return (
    <HeaderContainer
      onPressHandler={onCreateTodo}
      isLoading={isLoading}
      title={'task'}
    />
  )
})