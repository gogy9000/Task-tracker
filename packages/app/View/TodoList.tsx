import { useActions } from '../CustomHooks/CustomHooks'
import { ActivityIndicator, Text, FlatList, ListRenderItem, TouchableOpacity } from 'react-native'
import { Header } from './Header'
import { EmptyContent } from './EmptyContent'
import { ViewModContainer } from './ViewModContainer'
import React, { useCallback } from 'react'
import { Api } from '../DAL/Api'
import { TodoListItem } from '../DAL/types/types'
import { TaskList } from './TaskList'
import { TodoContainer } from './TodoContainer'

export const TodoList = () => {
  const { data: todoList, isLoading, isError, error } = Api.useGetTodoListQuery()
  const { changeCurrentTodo } = useActions()



  const render: ListRenderItem<TodoListItem> = ({ item }) => {
    const onNavigate = () => {
      changeCurrentTodo(item)
      // navigation.navigate("TodoScreen", {screen: "TaskScreen", params: {screen: "TaskList"}})
    }

    return (
        <TouchableOpacity activeOpacity={1} onLongPress={onNavigate}>
          <ViewModContainer>
            <TodoContainer todo={item} />
          </ViewModContainer>
        </TouchableOpacity>
    )
  }

  if (isLoading) {
    return <ActivityIndicator />
  }
  if (isError) {
    return (
      <Text>error</Text>
    )
  }

  return (
    <FlatList
      data={todoList}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item._id}
      renderItem={render}
      ListHeaderComponent={<Header  />}
      ListEmptyComponent={<EmptyContent />}
      listKey={'root'}
    />
  )
}
