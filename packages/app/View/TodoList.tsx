import { useActions } from '../CustomHooks/CustomHooks'
import {Text, FlatList, ListRenderItem, TouchableOpacity } from 'react-native'
import { Header } from './Header'
import { EmptyContent } from './EmptyContent'
import { ViewModContainer } from './ViewModContainer'
import React, { useCallback } from 'react'
import { Api } from '../DAL/Api'
import { TodoListItem } from '../DAL/types/types'
import { TodoContainer } from './TodoContainer'
import { Center, Spinner, useBreakpointValue } from 'native-base'

export const TodoList = () => {
  const { data: todoList, isLoading, isError, error } = Api.useGetTodoListQuery()
  const { changeCurrentTodo } = useActions()
  const breakPoint=useBreakpointValue({base:1,sm:1,md:2,lg:2,xl:3,'2xl':3})
  console.log(breakPoint)


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
    return (
      <Center flex={1}>
        <Spinner size={"lg"} />
      </Center>
    )
  }
  if (isError) {
    return (
      <Center flex={1}>
      <Text>error</Text>
      </Center>
    )
  }
  return (
    <FlatList
      data={todoList}
      key={breakPoint}
      numColumns={breakPoint}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item._id}
      renderItem={render}
      ListHeaderComponent={<Header  />}
      ListEmptyComponent={<EmptyContent />}
      listKey={'root'}
    />
  )
}
