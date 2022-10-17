import { NavigationProvider } from './navigation'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { Provider } from 'react-redux'
import { store } from 'app/BLL/Store'

export function CommonProvider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <Provider store={store}>
      <NativeBaseProvider>{children}</NativeBaseProvider>
      </Provider>
    </NavigationProvider>
  )
}
