import { FC, memo, ReactElement, useCallback } from 'react'
import { FONTSIZE_SECONDARY, TEXTCOLOR_PRIMARY } from '../common/Variables'
import React from 'react'
import { FeedbackMutationType, TodoListItem } from '../DAL/types/types'
import {
  HStack,
  Input,
  VStack,
  Divider,
  IconButton,
  SmallCloseIcon,
  Button,
  Heading
} from 'native-base'

type TodoProps = {
  postFeedbackData:FeedbackMutationType
  deleteFeedbackData:FeedbackMutationType
  viewMod?: boolean
  todo: TodoListItem
  children?: ReactElement
  addTaskHandler?: () => void
  onChangeTaskTitle?: (value: string) => void
  currentTaskTitle?: string
  deleteTodoHandler?: (todoId: string) => void

}

export const Todo: FC<TodoProps> = memo((props) => {
  const { deleteFeedbackData,postFeedbackData, children, addTaskHandler, todo, viewMod, onChangeTaskTitle, currentTaskTitle, deleteTodoHandler } = props

  const onAddTask = useCallback(() => {
    addTaskHandler && addTaskHandler()
  }, [currentTaskTitle])

  const onDeleteTodo = useCallback(() => {
    deleteTodoHandler && deleteTodoHandler(todo._id)
  }, [todo._id, deleteTodoHandler])

  return (
    <VStack space={1}>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Heading w={'90%'} isTruncated size={'md'}>{todo.title}</Heading>
        <IconButton onPress={onDeleteTodo}
                    disabled={deleteFeedbackData.isLoading}
                    isDisabled={deleteFeedbackData.isLoading}
                    borderRadius={50}
                    icon={
                      <SmallCloseIcon />
                    }
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
      </HStack>
      {
        !viewMod &&
        <HStack space={1}>
          <Input flex={1}
                 variant={'underlined'}
                 _focus={{
                   borderColor: 'rgba(5,5,5,0.3)',
                   color: 'rgba(5,5,5,0.8)'
                 }
                 }
                 fontSize={FONTSIZE_SECONDARY}
                 fontWeight={'500'}
                 color={TEXTCOLOR_PRIMARY}
                 borderColor={TEXTCOLOR_PRIMARY}
                 size={'md'}
                 placeholder={'task name...'}
                 placeholderTextColor={TEXTCOLOR_PRIMARY}
                 onChangeText={onChangeTaskTitle}
                 value={currentTaskTitle}
          />
          <Button colorScheme={'blue'} variant={'subtle'} onPress={onAddTask}>add task</Button>
        </HStack>
      }
      {children || null}
      <Divider mb={3} />
    </VStack>
  )

})
