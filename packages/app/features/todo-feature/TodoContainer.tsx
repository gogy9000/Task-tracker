import React, { FC, memo, useCallback, useState } from 'react'
import { Todo } from './Todo'
import { Tasks } from './Tasks'
import { Spinner } from 'native-base'
import { Api } from 'app/DAL/Api'
import { FeedbackMutationType, TodoListItem } from 'app/DAL/types/types'

type TodoContainerProps = {
  todo: TodoListItem
}

export const TodoContainer: FC<TodoContainerProps> = memo(({ todo }) => {
  const [taskTitle, setTaskTitle] = useState('')
  const { data, isLoading } = Api.useGetTasksQuery({ todolistId: todo._id })
  const [deleteTodo, deleteFeedbackData] = Api.useDeleteTodoMutation()
  const [postTask, postFeedbackData] = Api.usePostTaskMutation()
  const tasks = data?.items

  const onChangeTodoTitle = useCallback((value: string) => {
    setTaskTitle(value)
  }, [taskTitle])

  const addTaskHandler = useCallback(() => {
    if (!taskTitle.trim()) {
      return
    }
    postTask({ todolistId: todo._id, title: taskTitle.trim() })
    setTaskTitle('')
  }, [todo._id, taskTitle])

  const deleteTodoHandler = useCallback((todoId: string) => {
    deleteTodo(todoId)
  }, [todo._id])

  return (
    <Todo
      postFeedbackData={postFeedbackData as FeedbackMutationType}
      deleteFeedbackData={deleteFeedbackData as FeedbackMutationType}
      currentTaskTitle={taskTitle}
      onChangeTaskTitle={onChangeTodoTitle}
      todo={todo}
      addTaskHandler={addTaskHandler}
      deleteTodoHandler={deleteTodoHandler}
    >
      {
        isLoading ?
          <Spinner size={'lg'} />
          :
          <Tasks todo={todo} tasks={tasks} />
      }
    </Todo>
  )
})