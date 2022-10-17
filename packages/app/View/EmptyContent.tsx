import {Text, View, StyleSheet} from "react-native";
import {FONTSIZEPrimary, HEIGHT, TEXTCOLOR, WIDTH} from "../common/Variables";
import React from "react";

export const EmptyContent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                O curva! list is empty!
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT * 0.79,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: TEXTCOLOR,
        fontSize: FONTSIZEPrimary,
    }
})