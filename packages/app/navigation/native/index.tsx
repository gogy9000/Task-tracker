import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from 'app/View/Login'
import { TodoList } from 'app/View/TodoList'

const Stack = createNativeStackNavigator<{
  login: undefined
  todolist:undefined
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
        name="login"
        component={Login}
        options={{
          title: 'login',
        }}
      />
    </Stack.Navigator>
  )
}
