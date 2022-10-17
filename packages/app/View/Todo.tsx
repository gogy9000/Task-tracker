import {FC, memo, ReactElement, useCallback} from "react";
import {Text, StyleSheet, View, StatusBar} from "react-native";
import {CustomButton} from "../common/CustomButton";
import {FONTSIZEPrimary, PADDING, TEXTCOLOR, WIDTH} from "../common/Variables";
import React from "react";
// import {StyledInput} from "../styled-components/StyledInput";
import {TodoListItem} from "../DAL/types/types";
import {Box, HStack, Input,VStack,Divider} from "native-base";

type TodoProps = {
    viewMod?: boolean
    todo: TodoListItem
    children?: ReactElement
    addTaskHandler?: () => void
    onChangeTaskTitle?: (value: string) => void
    currentTaskTitle?: string
    deleteTodoHandler?: (todoId: string) => void
}

export const Todo: FC<TodoProps> = memo((props) => {
    const {children, addTaskHandler, todo, viewMod, onChangeTaskTitle, currentTaskTitle, deleteTodoHandler} = props

    const onAddTask = useCallback(() => {
        addTaskHandler && addTaskHandler()
    }, [currentTaskTitle])

    const onDeleteTodo = useCallback(() => {
        deleteTodoHandler && deleteTodoHandler(todo._id)
    }, [todo._id,deleteTodoHandler])

    return (
        <VStack space={1} >
            <HStack flex={1} justifyContent={"space-between"}>
                <Text style={styles.title}>{todo.title}</Text>
                <CustomButton onPress={onDeleteTodo}>delete</CustomButton>
            </HStack>
            {
                !viewMod &&
                <HStack space={1}>
                    <Input flex={1}
                           placeholder={"task name..."}
                           placeholderTextColor={TEXTCOLOR}
                           onChangeText={onChangeTaskTitle}
                           value={currentTaskTitle}
                    />
                    <CustomButton onPress={onAddTask}>add task</CustomButton>
                </HStack>
            }
            {children || null}
            <Divider mb={3}/>
        </VStack>
    )

})

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight || 0,
        flex: 1,
        justifyContent: "flex-start",
        paddingHorizontal: PADDING / 3,
        paddingVertical: PADDING / 3,

    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: FONTSIZEPrimary,
        color: TEXTCOLOR,
        alignSelf: "center",
    },
    inputAndButtonBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: PADDING / 3
    },
    input: {
        width: (WIDTH - PADDING * 2) * 0.6
    }
})