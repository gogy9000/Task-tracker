import { NavigationProvider } from './navigation'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { Provider } from 'react-redux'
import { store } from 'app/BLL/Store'
import {DripsyProvider} from 'dripsy'
import { theme } from 'app/theme/theme'

export function CommonProvider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <DripsyProvider
        ssr
        // ssrPlaceholder={<LoadingScreen />} // optional
        theme={theme}
      >
      <Provider store={store}>
      <NativeBaseProvider>{children}</NativeBaseProvider>
      </Provider>
      </DripsyProvider>
    </NavigationProvider>
  )
}
