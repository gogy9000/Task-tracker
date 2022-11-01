import { extendTheme } from 'native-base'


export const customTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark'

  },
  components: {
    Button: {
      variants: {
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
            // _text:{color:'rgb(152,151,151)'}
          }
        }
      }

    },
    Input: {
      variants: {
        custom: {
          _dark:{
            borderStyle:'solid',
            borderWidth:'1',
            borderColor: 'rgb(255,255,255)',
            color: 'rgba(255,255,255,0.51)',
            _focus: {
              borderStyle:'solid',
              borderWidth:'1',
              borderColor: 'rgba(255,255,255,0.5)',
              color: 'rgb(255,255,255)'
            }
          },
          _light:{
            borderStyle:'solid',
            borderWidth:'1',
            borderColor: 'rgba(5,5,5,0.3)',
            color: 'rgba(7,7,7,0.5)',
            _focus: {
              borderStyle:'solid',
              borderWidth:'1',
              borderColor: 'rgb(59,87,157)',
              color: 'rgba(5,5,5,0.8)'
            }
          },
        }
      }
    }

  }
})

type CustomThemeType = typeof customTheme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {
  }
}