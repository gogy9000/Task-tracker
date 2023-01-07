import { FC, memo, ReactElement, useCallback } from 'react'
import React from 'react'
import {
  HStack,
  Input,
  VStack,
  SmallCloseIcon,
  Button,
  Heading
} from 'native-base'
import { IconButtonWrapper } from 'app/components/iconButtonWrapper/IconButtonWrapper'
import { FeedbackMutationType, TodoListItem } from 'app/DAL/types/types'

type TodoProps = {
  postFeedbackData: FeedbackMutationType
  deleteFeedbackData: FeedbackMutationType
  viewMod?: boolean
  todo: TodoListItem
  children?: ReactElement
  addTaskHandler?: () => void
  onChangeTaskTitle?: (value: string) => void
  currentTaskTitle?: string
  deleteTodoHandler?: (todoId: string) => void

}

export const Todo: FC<TodoProps> = memo((props) => {
  const {
    deleteFeedbackData,
    postFeedbackData,
    children,
    addTaskHandler,
    todo,
    viewMod,
    onChangeTaskTitle,
    currentTaskTitle,
    deleteTodoHandler
  } = props

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
        <IconButtonWrapper
          onPress={onDeleteTodo}
          _web={{
            size:'10'
          }}
          disabled={deleteFeedbackData.isLoading}
          isDisabled={deleteFeedbackData.isLoading}
          icon={
            <SmallCloseIcon />
          }
        />
      </HStack>
      {
        !viewMod &&
        <HStack space={'sm'}>
          <Input flex={1}
                 variant={'custom'}
                 fontWeight={'500'}
                 size={'md'}
                 placeholder={'task name...'}
                 onChangeText={onChangeTaskTitle}
                 value={currentTaskTitle}
          />
          <Button isLoading={postFeedbackData.isLoading}
                  disabled={postFeedbackData.isLoading}
                  _dark={{
                    variant:"darkStyle"
                  }}
                   variant={'lightStyle'}
                  onPress={onAddTask}
          >
            add task
          </Button>
        </HStack>
      }
      {children || null}

    </VStack>
  )

})
