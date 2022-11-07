import { TaskItem } from 'app/DAL/types/types'
import React, { useState } from 'react'
import { Api } from 'app/DAL/Api'
import { HStack, Text, VStack } from 'native-base'
import { EditableText } from 'app/View/editableText'
import { CustomDivider } from 'app/View/CustomDivider'

type DescriptionContainerProps = {
  task: TaskItem
}
export const DescriptionContainer: React.FC<DescriptionContainerProps> = ({ task }) => {
  const [putTask, { isLoading }] = Api.usePutTaskMutation()
  const [editMode, setEditMode] = useState(false)

  const onPutTask = (description: string) => {
    putTask({ ...task, description })
  }

  const initValue = task.description !== null ? task.description : ''
  return (

    <VStack alignContent={'center'}>
      <HStack space={'xs'} alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize={'md'}>Description:</Text>
        <EditableText boxWrapperProps={{ flex: 1, alignItems: 'center' }}
                      controlledEditMode={editMode}
                      textProps={{ flexWrap: 'wrap' }}
                      setControlledEditMode={setEditMode}
                      isLoading={isLoading}
                      onPressButton={onPutTask}
                      initialValue={initValue}
                      fontSize={'md'}
        />
      </HStack>
      <CustomDivider _light={{
        borderBottomColor: 'muted.500'
      }} _dark={{
        borderBottomColor: editMode ? 'blue.300' : 'muted.50'
      }} />
    </VStack>
  )
}