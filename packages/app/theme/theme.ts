import { extendTheme, INativebaseConfig } from 'native-base'
import { customIconButtonTheme } from 'app/theme/customIconButtonTheme'
import { customInputTheme } from 'app/theme/customInputTheme'
import { customButtonTheme } from 'app/theme/customButtonTheme'

export const customTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark'

  },
  components: {
    Text: {
      variants: {
        primary: {
          fontSize: 'xl',
          _light: { color: 'warmGray.500' },
          _dark:{color: 'warmGray.400'},
          fontWeight: '700'
        },
        secondary: {
          fontSize: 'lg',
          _light: { color: 'warmGray.500' },
          fontWeight: '500'
        }
      }
    },
    Button: {
      variants: {
        custom: customButtonTheme
      }
    },
    IconButton: {
      variants: {
        custom: customIconButtonTheme
      }
    },
    Input: {
      variants: {
        custom: customInputTheme
      }
    }
  }
})

type CustomThemeType = typeof customTheme;

export const config: INativebaseConfig = {
  strictMode: 'error'
}

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {
  }
}