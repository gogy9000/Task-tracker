import {StatusBar, StyleSheet, Text, View} from "react-native";
import {CustomButton} from "../common/CustomButton";
import React from "react";
import {BACKGROUNDCOLOR, FONTSIZE_PRIMARY, PADDING, TEXTCOLOR_PRIMARY} from "../common/Variables";
import {useAppSelector} from "../CustomHooks/CustomHooks";

export const TaskView = () => {
    const task = useAppSelector(state => state.navigateParamsState.currentTask)

    return (
        <View
            style={styles.container}>
            <Text style={styles.title}>{task.title}</Text>
            <View style={styles.taskBar}>
                <CustomButton>check</CustomButton>
                <CustomButton>delete</CustomButton>
                <CustomButton>edit</CustomButton>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    checkedTask: {
        backgroundColor: BACKGROUNDCOLOR
    },
    container: {
        paddingTop: StatusBar.currentHeight || 0,
        paddingHorizontal: PADDING / 4,
        flex: 1,
        justifyContent: "space-between"
    },
    title: {
        color: TEXTCOLOR_PRIMARY,
        fontSize: FONTSIZE_PRIMARY
    },
    taskBar: {
        flexDirection: "row",
        justifyContent: "space-around",
    }
})