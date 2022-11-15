import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from 'app/screens/login-screen/Login'
import { TaskList } from 'app/screens/task-screen/taskList'
import { TodoList } from 'app/screens/todolist-screen/TodoList'

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
