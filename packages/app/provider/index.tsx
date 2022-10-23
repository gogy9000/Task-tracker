import { NavigationProvider } from './navigation'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { Provider } from 'react-redux'
import { store } from 'app/BLL/Store'
import {DripsyProvider} from 'dripsy'
import { makeTheme } from 'dripsy'

// export const theme = makeTheme({
//   colors: {
//     $text: '#000',
//     $background: '#fff',
//     $primary: 'tomato',
//   },
//   space: {
//     // recommended: set 0 first, then double for consistent nested spacing
//     $0: 0,
//     $1: 4,
//     $2: 8,
//     $3: 16,
//     $4: 32,
//     $5: 64,
//     $6: 128,
//     $7: 256,
//   },
//   fontSizes: {
//     $0: 12,
//     $1: 14,
//     $2: 16,
//     $3: 18,
//     $4: 24,
//     $5: 28,
//     $6: 32,
//   },
//   text: {
//     h1: {
//       fontSize: '$2', // 16px, from `fontSizes` above
//     },
//     p: {
//       fontSize: '$0', // 12px from `fontSizes`
//       mb: '$3', // 16px from `space`
//     },
//   },
// })

export function CommonProvider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <NativeBaseProvider>
        {/*<DripsyProvider*/}
        {/*  ssr*/}
        {/*  // ssrPlaceholder={<LoadingScreen />} // optional*/}
        {/*  theme={theme}*/}
        {/*>*/}
          <Provider store={store}>
        {children}
          </Provider>
        {/*</DripsyProvider>*/}
      </NativeBaseProvider>

    </NavigationProvider>
  )
}
