import {StyleSheet, View, StatusBar, TextInput, Dimensions} from "react-native";
import {BACKGROUNDCOLOR, HEIGHT, PADDING, TEXTCOLOR, WIDTH,} from "../common/Variables";
import {FC, memo, useCallback, useEffect, useState} from "react";
import {CustomButton} from "../common/CustomButton";
import React from "react";
import {Api} from "../DAL/Api";
import {Box, HStack, Input} from "native-base";

type HeaderProps = {
    createTodoHandler: (newTodoTitle: string) => void
}

export const Header: FC<HeaderProps> = memo(({createTodoHandler}) => {
    const [inputValue, setInputValue] = useState("")
    const {data} = Api.useAuthMeQuery()


    const onTextInput = useCallback((value: string) => {
        setInputValue(value)
    }, [inputValue])

    const onCreateTodo = useCallback(() => {
        createTodoHandler(inputValue)
        setInputValue("")
    }, [inputValue])

    useEffect(() => {
        if (data && data.resultCode === 1) {
            // navigation.navigate("Login")
        }
    }, [data])



    return (
        <Box flex={1} safeAreaTop bg={"violet.600"} px="1" py="3">
            <HStack px="1" py="3" space={2}>
            <Input
                flex={1}
                onChangeText={onTextInput}
                value={inputValue}
                placeholderTextColor={TEXTCOLOR}
                placeholder={"Todo..."}

            />
            <CustomButton styleButton={styles.button} onPress={onCreateTodo}>
                Create todo
            </CustomButton>
            </HStack>
        </Box>
    )
})


const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight || 0,
        width: WIDTH,
        height: HEIGHT / 9,
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: BACKGROUNDCOLOR,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    button: {
        height: (HEIGHT - PADDING * 2) / 19,
        width: (WIDTH - PADDING * 2) / 2,
    },
    modalInputStyle: {
        height: (HEIGHT - PADDING * 2) / 19,
        width: (WIDTH - PADDING * 2) / 2,
    }
})