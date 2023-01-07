import {StyleProp, StyleSheet, TextStyle} from "react-native";
import {FONTSIZE_PRIMARY, TEXTCOLOR_PRIMARY} from "./Variables";

export const commonBorderStyle=(borderRadius:number=10):StyleProp<TextStyle>=>({
    borderStyle: "solid",
    borderColor: "#DDDDDD",
    borderRadius: borderRadius,
    borderWidth: 1
})

export const commonStyles=StyleSheet.create({
    modalInputStyle:{
        paddingHorizontal:10,
        fontSize:FONTSIZE_PRIMARY,
        color:TEXTCOLOR_PRIMARY,

    }
})