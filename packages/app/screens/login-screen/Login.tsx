import React, { memo, useEffect } from 'react'
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native'
import { Formik } from 'formik'
import { Box, Button, Center, FormControl, Heading, HStack, Input, Text, Link, VStack } from 'native-base'
import { useRouter } from 'solito/router'
import { ErrorType } from 'app/DAL/types/types'
import { Api } from 'app/DAL/Api'

type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
}

type FormValuesType = { email: string, password: string }

export const Login = memo(() => {
  const { data: authMeData } = Api.useAuthMeQuery()

  const [login, { isLoading, data: loginData, error }] = Api.useLoginMutation()
  const err = error as ErrorType
  const router = useRouter()

  useEffect(() => {
    if (authMeData && authMeData.resultCode === 0) {
      router.push('/todolist')
    }
  }, [authMeData])

  const validate = (values:FormValuesType) => {
    const errors: FormikErrorType = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
      errors.password = 'Required'
    } else if (values.password.length < 3) {
      errors.password = 'min length 3 symbols'
    }
    return errors
  }

  const loginClientError = err?.message || loginData?.messages[0]

  const onSubmit = async (values: FormValuesType) => {
    try {
      await login(values)
    } catch (e) {
      throw e
    }
  }

  return (
    <Center h={'100%'} w={'100%'} _dark={{ bg: 'warmGray.600' }}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleBlur, errors, handleSubmit, values }) => (
          <Box p={'2'} py={'8'} w={['60%', '50%', '40%', '30%', '20%']}>
            <Heading size='lg' fontWeight='600' color='coolGray.800' _dark={{
              color: 'warmGray.50'
            }}>
              Welcome
            </Heading>
            <Heading mt={'2'} _dark={{
              color: 'warmGray.200'
            }} color='coolGray.600' fontWeight='medium' size='xs'>
              Sign in to continue!
            </Heading>
            <VStack space={3}>
              <FormControl isInvalid={!!errors.email || !!loginClientError}>
                <FormControl.Label mt={'2'}>
                  Email
                </FormControl.Label>
                <Input
                  _focus={{ _invalid: { borderColor: 'red.300' } }}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email} />
                <VStack h={'6'}>
                  <FormControl.ErrorMessage>
                    {errors.email}
                  </FormControl.ErrorMessage>
                </VStack>
              </FormControl>
              <FormControl isInvalid={!!errors.password || !!loginClientError}>
                <FormControl.Label>
                  Password
                </FormControl.Label>
                <Input
                  type={'password'}
                  _focus={{ _invalid: { borderColor: 'red.300' } }}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <VStack h={'8'}>
                  <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
                  <FormControl.ErrorMessage>{loginClientError}</FormControl.ErrorMessage>
                </VStack>
                <Link
                  isExternal
                  href='https://social-network.samuraijs.com/login'
                  _text={{
                  fontSize: 'xs',
                  fontWeight: '500',
                  color: 'indigo.500'
                }}
                  alignSelf='flex-end'
                  mb='2'
                >
                  Forget Password?
                </Link>
              </FormControl>
              <Button colorScheme='indigo'
                      isLoading={isLoading}
                      isDisabled={isLoading || !!errors.email || !!errors.password}
                      disabled={isLoading || !!errors.email || !!errors.password}
                      onPress={
                        (handleSubmit as unknown) as (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
                      }
              >
                Sign in
              </Button>
              <HStack mt='6' justifyContent='center'>
                <Text fontSize='sm' color='coolGray.600' _dark={{
                  color: 'warmGray.200'
                }}>
                  I'm a new user.{' '}
                </Text>
                <Link
                  isExternal
                  href='https://social-network.samuraijs.com/signUp'
                  _text={{
                    color: 'indigo.500',
                    fontWeight: 'medium',
                    fontSize: 'sm'
                  }}
                >
                  Sign Up
                </Link>
              </HStack>
            </VStack>
          </Box>
        )}
      </Formik>
    </Center>
  )
})

