import React, {memo, useCallback} from "react";
import {Text, View, StyleSheet, Pressable} from "react-native";

import {CustomButton} from "../common/CustomButton";
import {BACKGROUNDCOLOR, FONTSIZEPrimary, HEIGHT, MARGIN, PADDING, TEXTCOLOR, WIDTH} from "../common/Variables";
import {useActions} from "../CustomHooks/CustomHooks";
import {TaskItem, TodoListItem} from "../DAL/types/types";
import {Api} from "../DAL/Api";

type TaskProps = {
    task: TaskItem
    todo: TodoListItem
}
export const Task: React.FC<TaskProps> = memo(({task, todo}) => {
    const [putTask, {isLoading}] = Api.usePutTaskMutation()

    const {changeCurrentTodo, changeCurrentTask} = useActions()

    const doubleTap = useCallback(() => {
        let tapCount = 0
        return () => {
            tapCount++
            setTimeout(() => {
                tapCount = 0
            }, 300)
            if (tapCount === 2) {
                changeCurrentTodo(todo)
                changeCurrentTask(task)
                // navigation.navigate("TodoScreen", {screen: "TaskScreen", params: {screen: "TaskView"}})
            } else {
            }
        }
    }, [todo, task])

    const checkTask = useCallback(() => {
        putTask({...task, status: task.status === 0 ? 1 : 0})
    }, [task])

    return (
        <Pressable onPress={doubleTap()}>
            <View style={styles.taskContainer}>
                <Text style={styles.title}>{task.title}</Text>
                <CustomButton styleButton={styles.button} disabled={isLoading} onPress={checkTask}>check</CustomButton>
            </View>
        </Pressable>
    )
})

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: MARGIN / 3,
        paddingVertical: PADDING / 4,
        paddingHorizontal: PADDING / 4,
    },
    checkedTask: {
        backgroundColor: BACKGROUNDCOLOR
    },
    title: {
        color: TEXTCOLOR,
        fontSize: FONTSIZEPrimary,
        maxWidth: ((WIDTH - PADDING * 2) / 1.5)
    },
    button: {
        maxHeight: HEIGHT / 25
    },
})