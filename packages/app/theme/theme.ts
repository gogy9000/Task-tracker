import { extendTheme } from 'native-base'


 export const customTheme = extendTheme({
   config:{
     useSystemColorMode: false,
     initialColorMode: 'dark',

   },
   components:{
     Button: {
       variants:{
         darkStyle: {
           _text: {color: "white"},
           borderColor:'white',
           borderWidth:'1',
           _hover:{
             bg:'rgba(5,5,5,0.1)'
           },
           _pressed:{
             bg:'rgba(5,5,5,0.5)',
             borderColor:'rgb(152,151,151)',
             _text:{color:'rgb(152,151,151)'}
           }
         },
         lightStyle:{
           _text: {color: "rgb(253,253,253)"},
           bg:"rgb(37,99,234)",
           _hover:{
             bg:'rgb(35,84,201)'
           },
           _pressed:{
             bg:'rgb(19,50,108)',
             // _text:{color:'rgb(152,151,151)'}
           }
         }
       }
           // _text: {color: "white"},
           // _web: {outlineWidth: string},
           // bg: string,
           //   _hover: {_text: {color: any},bg: any},
           // _pressed: {_text: {color: any},bg: any}},
     },

   }
 });

type CustomThemeType = typeof customTheme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}