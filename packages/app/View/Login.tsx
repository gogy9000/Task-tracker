import React, {useEffect} from "react";
import {CustomButton} from "../common/CustomButton";
import {StyleSheet, View, NativeSyntheticEvent, NativeTouchEvent, ActivityIndicator} from "react-native";
import {Formik} from 'formik';
// import {StyledInput} from "../styled-components/StyledInput";
import {MARGIN, PADDING, WIDTH} from "../common/Variables";
import {commonBorderStyle} from "../common/Styles";
import {Api} from "../DAL/Api";
// import {useAppNavigation} from "../CustomHooks/CustomHooks";
import {Box, Button, Center, FormControl, Heading, HStack, Input, Text, Link, VStack} from "native-base";

export const Login = () => {
    const {data, isLoading, error, isError} = Api.useAuthMeQuery()
    const err = error as { status: number, data: any }
    const [login] = Api.useLoginMutation()
    // const navigation = useAppNavigation()

    useEffect(() => {
        if (data && data.resultCode === 0) {
            // navigation.navigate("TodoScreen", {screen: "TodoList"})
        }
    }, [data])

    const onSubmit = async (values: { email: string, password: string }) => {
        try {
            console.log(values)
            await login(values)
        } catch (e) {
            console.log(e)
        }
    }

    if (isLoading) {
        return (
            <View style={styles.loginContainer}>
                <ActivityIndicator size={"large"} color={"rgb(255,255,255)"}/>
            </View>
        )
    }

    if (isError) {
        return (
            <View style={styles.loginContainer}>
                {
                    error ?
                        <Text>{err.data}</Text> :
                        <Text>error</Text>
                }

            </View>
        )
    }
    return (
        <Center w={"100%"}>
            <Formik
                initialValues={{email: '', password: ""}}
                onSubmit={onSubmit}
            >
                {({handleChange, handleBlur, handleSubmit, values}) => (
                    <Box safeArea p={"2"} py={"8"} w="90%" maxW="290">
                        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            Welcome
                        </Heading>
                        <Heading mt="1" _dark={{
                            color: "warmGray.200"
                        }} color="coolGray.600" fontWeight="medium" size="xs">
                            Sign in to continue!
                        </Heading>
                        <VStack space={3} mt={"5"}>
                            <FormControl>
                                <FormControl.Label>
                                    Email
                                </FormControl.Label>
                                <Input
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}/>
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>
                                    Password
                                </FormControl.Label>
                                <Input type={"password"}
                                       onChangeText={handleChange('password')}
                                       onBlur={handleBlur('password')}
                                       value={values.password}
                                />
                                <Link _text={{
                                    fontSize: "xs",
                                    fontWeight: "500",
                                    color: "indigo.500"
                                }} alignSelf="flex-end" mt="1">
                                    Forget Password?
                                </Link>
                            </FormControl>
                            <Button mt="2" colorScheme="indigo"
                                    onPress={(handleSubmit as unknown) as (ev: NativeSyntheticEvent<NativeTouchEvent>) => void}
                                    >Sign in</Button>
                            <HStack mt="6" justifyContent="center">
                                <Text fontSize="sm" color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }}>
                                    I'm a new user.{" "}
                                </Text>
                                <Link _text={{
                                    color: "indigo.500",
                                    fontWeight: "medium",
                                    fontSize: "sm"
                                }} href="#">
                                    Sign Up
                                </Link>
                            </HStack>
                        </VStack>
                    </Box>
                )}
            </Formik>
        </Center>
    )

    // return (
    //     <View style={styles.loginContainer}>
    //         <Formik
    //             initialValues={{email: '', password: ""}}
    //             onSubmit={onSubmit}
    //         >
    //             {({handleChange, handleBlur, handleSubmit, values}) => (
    //                 <View style={styles.loginForm}>
    //                     <StyledInput
    //                         onChangeText={handleChange('email')}
    //                         onBlur={handleBlur('email')}
    //                         value={values.email}
    //                     />
    //                     <StyledInput
    //                         style={styles.loginTextField}
    //                         onChangeText={handleChange('password')}
    //                         onBlur={handleBlur('password')}
    //                         value={values.password}
    //                     />
    //
    //                     <CustomButton
    //                         onPress={(handleSubmit as unknown) as (ev: NativeSyntheticEvent<NativeTouchEvent>) => void}
    //                         title="Submit"/>
    //                 </View>
    //             )}
    //         </Formik>
    //     </View>
    // )
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginForm: {
        width: (WIDTH - PADDING * 2),
        paddingHorizontal: PADDING,
        paddingVertical: PADDING,
        backgroundColor: "rgba(5,5,5,0.5)",
    },
    loginTextField: {
        marginVertical: MARGIN / 3,
    }
})