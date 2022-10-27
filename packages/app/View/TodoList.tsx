import { useActions } from '../CustomHooks/CustomHooks'
import { ListRenderItem, TouchableOpacity } from 'react-native'
import { ViewModContainer } from './ViewModContainer'
import React from 'react'
import { Api } from '../DAL/Api'
import { ErrorType, TodoListItem } from '../DAL/types/types'
import { TodoContainer } from './TodoContainer'
import { useRouter } from 'solito/router'
import { ContentView } from 'app/View/ContentView'

export const TodoList = () => {

  const { data: todoList, isLoading, isError, error, refetch } = Api.useGetTodoListQuery()
  const { changeCurrentTodo} = useActions()
  const router = useRouter()
  const err=error as  ErrorType

  const render: ListRenderItem<TodoListItem> = ({ item }) => {

    const doubleTap = () => {
      let tapCount = 0
      return () => {
        tapCount++
        setTimeout(() => {
          tapCount = 0
        }, 300)
        if (tapCount === 2) {
          changeCurrentTodo(item)
          router.push('/taskList')
        } else {
        }
      }
    }

    return (
      <TouchableOpacity key={item._id} activeOpacity={1} onPress={doubleTap()}>
        <ViewModContainer>
          <TodoContainer todo={item} />
        </ViewModContainer>
      </TouchableOpacity>
    )
  }

 return (
   <ContentView content={todoList}
                listKey={'root'}
                refetch={refetch}
                isLoading={isLoading}
                error={err}
                renderItem={render}
                isError={isError}
   />
 )


}
