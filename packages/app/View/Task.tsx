import React, { memo, useCallback } from 'react'
import { TaskItem, TodoListItem } from '../DAL/types/types'
import { Api } from '../DAL/Api'
import { CheckIcon, HStack, Text, View } from 'native-base'
import { TEXTCOLOR_PRIMARY } from 'app/common/Variables'
import { IconButtonWrapper } from 'app/View/IconButtonWrapper'
import { CustomDivider } from 'app/View/CustomDivider'

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
          _web={{
            size:'4'
          }}
          icon={
            <CheckIcon  />
          }
          _icon={{
            _dark:{
              color: task.status !== 0 ?'rgba(255,255,255,0.42)': 'rgb(255,255,255)'
            },
            color: task.status === 0 ?TEXTCOLOR_PRIMARY: 'rgb(37,99,234)'
          }}
        />

        <Text w={'90%'}  fontSize={'xl'}>{task.title}</Text>

      </HStack>
      <CustomDivider _light={{
        borderBottomColor: "muted.500",
      }} _dark={{

        borderBottomColor: "muted.50"
      }}/>
    </View>
  )
})
