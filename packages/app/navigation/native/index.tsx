import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from 'app/View/Login'
import { TodoList } from 'app/View/TodoList'
import { TaskList } from 'app/View/taskList'
import { Heading } from 'native-base'

const Stack = createNativeStackNavigator<{
  login: undefined
  todolist:undefined
  taskList:undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen
        name="todolist"
        component={
        TodoList
      }
        options={{
          title: 'todolist',
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: 'login',
        }}
      />
      <Stack.Screen
        name="taskList"
        component={TaskList}
        options={{
          title: 'taskList',
        }}
      />
    </Stack.Navigator>
  )
}
