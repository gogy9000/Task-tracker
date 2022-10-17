import {View, StyleSheet, Text} from "react-native";
import {BACKGROUNDCOLOR, HEIGHT, TEXTCOLOR, WIDTH} from "../common/Variables";
import {CustomButton} from "../common/CustomButton";
import React from "react";

export const AppBar = () => {
    return (
        <View style={styles.container}>
            <CustomButton>
                <Text>A</Text>
            </CustomButton>
            <CustomButton>B</CustomButton>
            <CustomButton
                styleButton={{...styles.button, backgroundColor: TEXTCOLOR}}
                styleTitle={{color: "black"}}
                title={"C"}/>
            <CustomButton
                styleButton={styles.button}
                styleTitle={{color: "blue"}}
                title={"D"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT * 0.06,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: BACKGROUNDCOLOR
    },
    button: {
        borderColor: "red"
    }
})