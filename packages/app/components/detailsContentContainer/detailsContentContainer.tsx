import { TaskItem } from 'app/DAL/types/types'
import React, { useState } from 'react'
import { CheckCircleIcon, HStack, Input, Text, VStack } from 'native-base'
import { IconButtonWrapper } from 'app/components/iconButtonWrapper/IconButtonWrapper'
import { CustomDivider } from 'app/components/customDivider/CustomDivider'

type DetailsContentContainerProps = {
  title: string
  value?: string | number | null
  onPutTask: (payload: Partial<TaskItem>) => void
  PayloadKey: keyof TaskItem
  isLoading?: boolean
}
export const DetailsContentContainer: React.FC<DetailsContentContainerProps> = ({
                                                                                  isLoading,
                                                                                  title,
                                                                                  value,
                                                                                  onPutTask,
                                                                                  PayloadKey
                                                                                }) => {
  const [inputValue, setInputValue] = useState(value)

  const onPressHandler = () => {
    if (inputValue) {
      onPutTask({ [PayloadKey]: inputValue })
    }
  }

  return (
    <VStack alignContent={'center'}>
      <HStack alignItems={'flex-end'} justifyContent={'space-between'}>
        <Text fontSize={'md'}>{title}</Text>
        <Input onChangeText={setInputValue}
               _focus={{ borderColor: 'rgb(37,99,234)' }}
               paddingBottom={'0'}
               borderColor={'rgb(100,98,98)'}
               flexGrow={2}
               size={'md'}
               variant={'unstyled'}
               value={inputValue ? inputValue.toString() : ''}

        />
        <IconButtonWrapper disabled={isLoading}
                           isDisabled={isLoading}
                           icon={<CheckCircleIcon size={5} color={'muted.500'} />}
                           onPress={onPressHandler} />
      </HStack>
      <CustomDivider />
    </VStack>
  )
}