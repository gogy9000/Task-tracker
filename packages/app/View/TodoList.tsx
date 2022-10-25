import { useActions } from '../CustomHooks/CustomHooks'
import { Text, FlatList, ListRenderItem, TouchableOpacity, View } from 'react-native'
import { Header } from './Header'
import { EmptyContent } from './EmptyContent'
import { ViewModContainer } from './ViewModContainer'
import React from 'react'
import { Api } from '../DAL/Api'
import { TodoListItem } from '../DAL/types/types'
import { TodoContainer } from './TodoContainer'
import { Center, Spinner, useBreakpointValue } from 'native-base'
import { useRouter } from 'solito/router'

export const TodoList = () => {
  const breakPoint = useBreakpointValue({ base: 1, md: 2, xl: 3 })
  const { data: todoList, isLoading, isError, error, refetch } = Api.useGetTodoListQuery()
  const { changeCurrentTodo } = useActions()
  const router = useRouter()
  console.log(todoList)

  const err=error as  {
    "data":{
      "message": string,
    },
    "status": number,
  }

  const render: ListRenderItem<TodoListItem> = ({ item }) => {
    const onNavigate = () => {
      changeCurrentTodo(item)
      router.push('/taskList')
    }

    return (
      <TouchableOpacity key={item._id} activeOpacity={1} onPress={onNavigate}>
        <ViewModContainer>
          <TodoContainer todo={item} />
        </ViewModContainer>
      </TouchableOpacity>
    )
  }

  if (isLoading) {
    return (
      <Center flex={1}>
        <Spinner size={'lg'} />
      </Center>
    )
  }
  if (isError) {
    return (
      <Center flex={1}>
        <Text>{err.data.message}</Text>
      </Center>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        onRefresh={refetch}
        refreshing={isLoading}
        data={todoList}
        extraData={breakPoint}
        key={breakPoint}
        numColumns={breakPoint}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={breakPoint > 1 ? { alignSelf: 'center' } : undefined}
        keyExtractor={(item) => item._id}
        renderItem={render}
        ListHeaderComponent={<Header />}
        ListEmptyComponent={<EmptyContent />}
        listKey={'root'}
      />
    </View>
  )
}
