import { NavigationProvider } from './navigation'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { Provider } from 'react-redux'
import { store } from 'app/BLL/Store'
import { config, customTheme } from 'app/theme/theme'


export function CommonProvider({ children }: { children: React.ReactNode }) {

  return (
    <NavigationProvider>
      <NativeBaseProvider
        config={config}
        theme={customTheme}
      >
        <Provider store={store}>
          {children}
        </Provider>
      </NativeBaseProvider>
    </NavigationProvider>
  )
}
