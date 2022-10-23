import React, { memo, useCallback } from 'react'
import { Pressable } from 'react-native'
import { useActions } from '../CustomHooks/CustomHooks'
import { TaskItem, TodoListItem } from '../DAL/types/types'
import { Api } from '../DAL/Api'
import { CheckIcon, Divider, HStack, IconButton, Text, View } from 'native-base'
import { TEXTCOLOR_PRIMARY } from 'app/common/Variables'
import { useRouter } from 'solito/router'

type TaskProps = {
  task: TaskItem
  todo: TodoListItem
}

export const Task: React.FC<TaskProps> = memo(({ task, todo }) => {
  const [putTask, { isLoading }] = Api.usePutTaskMutation()
  const router = useRouter()

  const { changeCurrentTodo, changeCurrentTask } = useActions()

  const doubleTap = useCallback(() => {
    let tapCount = 0
    return () => {
      tapCount++
      setTimeout(() => {
        tapCount = 0
      }, 300)
      if (tapCount === 2) {
        changeCurrentTodo(todo)
        changeCurrentTask(task)
        router.push('/TaskList')
        // navigation.navigate("TodoScreen", {screen: "TaskScreen", params: {screen: "TaskView"}})
      } else {
      }
    }
  }, [todo, task])

  const checkTask = useCallback(() => {

    putTask({ ...task, status: task.status === 0 ? 1 : 0 })
  }, [task])

  return (
    <View>
      <HStack space={'sm'} mt={5} alignItems={'center'}>
        <IconButton onPress={checkTask}
                    disabled={isLoading}
                    isDisabled={isLoading}
                    borderRadius={50}
                    icon={
                      <CheckIcon />
                    }
                    _icon={{
                      size: '5',
                      color: task.status === 0 ? 'rgb(37,99,234)' : TEXTCOLOR_PRIMARY
                    }}
                    _web={{
                      size: '5'
                    }}
                    _hover={{
                      bg: 'rgb(250,250,250)',
                      _icon: {
                        color: 'rgb(37,99,234)'
                      }
                    }}
                    _pressed={{
                      _web: {
                        bg: 'rgb(255,255,255)'
                      },
                      bg: 'rgba(37,99,234,0.3)'
                    }}
        />
        <Text w={'90%'} color={TEXTCOLOR_PRIMARY} fontSize={'xl'}>{task.title}</Text>
      </HStack>
      <Divider bg={TEXTCOLOR_PRIMARY} />
    </View>
  )
})
