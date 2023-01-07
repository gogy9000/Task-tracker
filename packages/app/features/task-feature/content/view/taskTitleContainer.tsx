import { TaskItem } from 'app/DAL/types/types'
import React, { useMemo } from 'react'
import { Text } from 'native-base'


type TaskTitleContainerProps = {
  task: TaskItem
}
export const TaskTitleContainer: React.FC<TaskTitleContainerProps> = ({ task }) => {
 const capitalizeTitle=useMemo( ()=> task.title.slice(0, 1).toUpperCase() + task.title.slice(1),[task])
  return (
    <Text  variant={'primary'}>{capitalizeTitle}</Text>
  )
}

