import {StyleProp, StyleSheet, TextStyle} from "react-native";
import {FONTSIZEPrimary, HEIGHT, PADDING, TEXTCOLOR, WIDTH} from "./Variables";

export const commonBorderStyle=(borderRadius:number=10):StyleProp<TextStyle>=>({
    borderStyle: "solid",
    borderColor: "#DDDDDD",
    borderRadius: borderRadius,
    borderWidth: 1
})

export const commonStyles=StyleSheet.create({
    modalInputStyle:{
        height:(HEIGHT-PADDING*2)/19,
        width:(WIDTH-PADDING*2)/2,
        paddingHorizontal:10,
        fontSize:FONTSIZEPrimary,
        color:TEXTCOLOR,

    }
})