import {ColorValue, GestureResponderEvent, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {FC, memo, ReactElement, useCallback} from "react";
import {BACKGROUNDCOLOR, FONTSIZE_PRIMARY, PADDING, TEXTCOLOR_PRIMARY, WIDTH} from "./Variables";
import {commonBorderStyle} from "./Styles";
import React from "react";
type CustomButtonPropsType = {
    onPress?: (event: GestureResponderEvent) => void
    title?: string
    styleButton?: Object
    styleTitle?: Object
    activeOpacity?: number
    underlayColor?: ColorValue
    children?: ReactElement|string
    disabled?:boolean
}
export const CustomButton: FC<CustomButtonPropsType> = memo((props) => {
    const {children, onPress, title = "Button", styleButton, styleTitle, activeOpacity, underlayColor,disabled} = props

    const onPressHandler = useCallback( (event: GestureResponderEvent) => {
        onPress && onPress(event)
    },[onPress])

    const unionStylesButton=Object.assign({},styles.button,styleButton,commonBorderStyle())
    const unionTitleButton=Object.assign({},styles.title,styleTitle)

    return (
        <TouchableHighlight
            onPress={onPressHandler}
            disabled={disabled}
            activeOpacity={!!activeOpacity ? activeOpacity : 0.2}
            style={unionStylesButton}
            underlayColor={!!underlayColor ? underlayColor : BACKGROUNDCOLOR}
        >
            <Text style={unionTitleButton}>
                {children || title}
            </Text>
        </TouchableHighlight>
    )
})
const styles = StyleSheet.create({
    button: {
        flexWrap:"nowrap",
        paddingHorizontal: 5,
        justifyContent: "center",
        alignItems: "center",

    },
    title: {
        color: 'rgb(5,5,5)',
        fontSize: FONTSIZE_PRIMARY
    }
})