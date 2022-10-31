import { TaskItem } from 'app/DAL/types/types'
import React, { useState } from 'react'
import { Api } from 'app/DAL/Api'
import { CheckCircleIcon, HStack, Input, Text, VStack } from 'native-base'
import { EditableText } from 'app/View/editableText'
import { IconButtonWrapper } from 'app/View/IconButtonWrapper'
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
    <HStack space={'xs'} alignItems={'flex-start'} justifyContent={'space-between'}>
      <Text fontSize={'md'}>Description:</Text>
      <EditableText boxWrapperProps={{flex:1,alignItems:'flex-end'}}
                    controlledEditMode={editMode}
                    setControlledEditMode={setEditMode}
                    isLoading={isLoading}
                    onPressButton={onPutTask}
                    initialValue={initValue}
                    fontSize={'md'}
      />
    </HStack>
    <CustomDivider color={editMode?'rgb(37,99,234)':undefined}/>
  </VStack>

  )
}