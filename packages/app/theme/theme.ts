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
    Button: {
      variants: {
        custom:customButtonTheme,
        darkStyle: {
          _text: { color: 'white' },
          borderColor: 'white',
          borderWidth: '1',
          _hover: {
            bg: 'rgba(5,5,5,0.1)'
          },
          _pressed: {
            bg: 'rgba(5,5,5,0.5)',
            borderColor: 'rgb(152,151,151)',
            _text: { color: 'rgb(152,151,151)' }
          }
        },
        lightStyle: {
          _text: { color: 'rgb(253,253,253)' },
          bg: 'rgb(37,99,234)',
          _hover: {
            bg: 'rgb(35,84,201)'
          },
          _pressed: {
            bg: 'rgb(19,50,108)'
          }
        }
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