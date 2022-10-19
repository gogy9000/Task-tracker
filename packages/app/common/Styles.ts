import {StyleProp, StyleSheet, TextStyle} from "react-native";
import {FONTSIZE_PRIMARY, HEIGHT, PADDING, TEXTCOLOR_PRIMARY, WIDTH} from "./Variables";

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
        fontSize:FONTSIZE_PRIMARY,
        color:TEXTCOLOR_PRIMARY,

    }
})