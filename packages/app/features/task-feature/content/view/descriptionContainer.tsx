import { TaskItem } from 'app/DAL/types/types'
import React, { useState } from 'react'
import { Api } from 'app/DAL/Api'
import { TextArea, VStack, Text, IconButton } from 'native-base'
import AntDesign from '@expo/vector-icons/AntDesign'

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
    putTask({ ...task, description: initValue.trim() })
  }

  return (
    <VStack space={'sm'}>
      <Text variant={'primary'} alignSelf={'center'}>Description</Text>
      <TextArea onChangeText={setInitValue}
                isDisabled={isLoading}
                lineHeight={'md'}
                scrollEnabled={false}
                multiline={true}
                fontSize={'lg'}
                placeholder={'Description'}
                textAlignVertical={'top'}
                variant={'outline'}
                value={initValue}
                rightElement={
                  <IconButton onPress={onPutTask} alignSelf={'flex-end'} variant={'solid'}
                              _icon={{ as: AntDesign, name: 'pluscircleo' }}
                  />}
      />
    </VStack>
  )
}