import React, { memo, useCallback } from 'react'
import { TaskItem, TodoListItem } from '../DAL/types/types'
import { Api } from '../DAL/Api'
import { CheckIcon, Divider, HStack, Text, View } from 'native-base'
import { TEXTCOLOR_PRIMARY } from 'app/common/Variables'
import { IconButtonWrapper } from 'app/View/IconButtonWrapper'

type TaskProps = {
  task: TaskItem
  todo: TodoListItem
}

export const Task: React.FC<TaskProps> = memo(({ task, todo }) => {
  const [putTask, { isLoading }] = Api.usePutTaskMutation()

  const checkTask = useCallback(() => {

    putTask({ ...task, status: task.status === 0 ? 1 : 0 })
  }, [task])

  return (
    <View>
      <HStack space={'sm'} mt={5} alignItems={'center'}>
        <IconButtonWrapper
          onPress={checkTask}
          disabled={isLoading}
          isDisabled={isLoading}
          icon={
            <CheckIcon />
          }
          _icon={{
            size: '5',
            color: task.status === 0 ? 'rgb(37,99,234)' : TEXTCOLOR_PRIMARY
          }}
        />

        <Text w={'90%'} color={TEXTCOLOR_PRIMARY} fontSize={'xl'}>{task.title}</Text>
      </HStack>
      <Divider bg={TEXTCOLOR_PRIMARY} />
    </View>
  )
})
