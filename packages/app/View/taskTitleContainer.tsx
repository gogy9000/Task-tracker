import { TaskItem } from 'app/DAL/types/types'
import React from 'react'
import { Api } from 'app/DAL/Api'
import { EditableText } from 'app/View/editableText'

type TaskTitleContainerProps = {
  task: TaskItem
}
export const TaskTitleContainer: React.FC<TaskTitleContainerProps> = ({ task }) => {
  const [putTask, { isLoading }] = Api.usePutTaskMutation()
  const onPutTaskTitle = (title: string) => {
    putTask({ ...task, title })
  }
  return (
    <EditableText
      hiddenIcon
      isLoading={isLoading}
      inputProps={{ fontSize: '2xl' }}
      onPressButton={onPutTaskTitle}
      textProps={{ fontSize: '2xl' }}
      initialValue={task.title}
    />
  )
}

