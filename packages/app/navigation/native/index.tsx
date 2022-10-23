import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from 'app/View/Login'
import { TodoList } from 'app/View/TodoList'
import { TaskList } from 'app/View/TaskList'

const Stack = createNativeStackNavigator<{
  login: undefined
  todolist:undefined
  TaskList:undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="todolist"
        component={TodoList}
        options={{
          title: 'Todolist',
        }}
      />
      <Stack.Screen
        name="TaskList"
        component={TaskList}
        options={{
          title: 'TaskList',
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: 'login',
        }}
      />
    </Stack.Navigator>
  )
}
