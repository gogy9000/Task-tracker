import { useActions } from '../CustomHooks/CustomHooks'
import { ListRenderItem, TouchableOpacity } from 'react-native'
import { ViewModContainer } from './ViewModContainer'
import React, { memo } from 'react'
import { Api } from '../DAL/Api'
import { ErrorType, TodoListItem } from '../DAL/types/types'
import { TodoContainer } from './TodoContainer'
import { useRouter } from 'solito/router'
import { ContentView } from 'app/View/ContentView'
import { AuthRedirect } from 'app/View/AuthRedirect'
import { HeaderByTodoList } from 'app/View/HeaderByTodoList'
import { EmptyContent } from 'app/View/EmptyContent'
import { doubleTap } from 'app/Utils/doubleTap'

export const TodoList = AuthRedirect(memo(() => {
  const { data: todoList, isLoading, isError, error, refetch } = Api.useGetTodoListQuery()
  const { changeCurrentTodo } = useActions()
  const router = useRouter()
  const err = error as ErrorType

  const render: ListRenderItem<TodoListItem> = ({ item }) => {


    const onPress=()=>{
      changeCurrentTodo(item)
      router.push('/taskList')
    }

    return (

        <ViewModContainer  key={item._id} onPress={doubleTap(onPress)}>
          <TodoContainer todo={item} />
        </ViewModContainer>

    )
  }

  return (
    <ContentView
      onRefresh={refetch}
      data={todoList}
      listKey={'root'}
      isLoading={isLoading}
      error={err}
      renderItem={render}
      ListHeaderComponent={<HeaderByTodoList />}
      ListEmptyComponent={<EmptyContent errorMessage={err?.data.message} />}
    />
  )
}))
