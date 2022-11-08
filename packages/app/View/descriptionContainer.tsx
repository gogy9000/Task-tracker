import { TaskItem } from 'app/DAL/types/types'
import React, { useState } from 'react'
import { Api } from 'app/DAL/Api'
import { Input, Box } from 'native-base'

type DescriptionContainerProps = {
  task: TaskItem
}
export const DescriptionContainer: React.FC<DescriptionContainerProps> = ({ task }) => {
  const [initValue, setInitValue] = useState(task.description || '')
  const [putTask, { isLoading }] = Api.usePutTaskMutation()

  const onPutTask = () => {
    if (task.description === initValue.trim()) {
      return
    }
    if (!initValue.trim()) {
      return
    }
    putTask({ ...task, description: initValue.trim()})
  }

  return (
    <Box flexDirection={'row'} alignItems={'center'}>
      <Input onChangeText={setInitValue}
             onEndEditing={onPutTask}
             fontSize={'lg'}
             placeholder={'Description'}
             textAlignVertical={'top'}
             multiline
             flex={1}
             variant={'outline'}
             value={initValue} />
    </Box>
  )
}