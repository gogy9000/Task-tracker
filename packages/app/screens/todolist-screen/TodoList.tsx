import { useActions } from 'app/CustomHooks/CustomHooks'
import { ListRenderItem } from 'react-native'
import { ViewModContainer } from 'app/components/viewModContainer/ViewModContainer'
import React, { memo } from 'react'
import { Api } from 'app/DAL/Api'
import { TodoContainer } from 'app/features/todo-feature/TodoContainer'
import { useRouter } from 'solito/router'
import { ContentView } from 'app/components/contentView/ContentView'
import { AuthRedirect } from 'app/HOC/AuthRedirect'
import { HeaderByTodoList } from 'app/features/todo-feature/HeaderByTodoList'
import { EmptyContent } from 'app/components/emptyContent/EmptyContent'
import { doubleTap } from 'app/Utils/doubleTap'
import { ErrorType, TodoListItem } from 'app/DAL/types/types'


export const TodoList = AuthRedirect(memo(() => {

  // useEffect(() => {
  //
  //   const backAction = () => {
  //     BackHandler.exitApp()
  //     return true;
  //   };
  //
  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",backAction
  //   );
  //
  //   return () => backHandler.remove();
  // }, []);

  const { data: todoList, isLoading, error, refetch } = Api.useGetTodoListQuery()
  const { changeCurrentTodo } = useActions()
  const router = useRouter()
  const err = error as ErrorType

  const render: ListRenderItem<TodoListItem> = ({ item }) => {

    const onPress = () => {
      changeCurrentTodo(item)
      router.push('/taskList')
    }

    return (
      <ViewModContainer key={item._id} onPress={doubleTap(onPress)}>
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
      ListEmptyComponent={<EmptyContent errorMessage={err?.message} />}
    />
  )
}))
