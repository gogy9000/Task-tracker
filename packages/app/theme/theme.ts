import { extendTheme } from 'native-base'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme
 export const customTheme = extendTheme({ config });