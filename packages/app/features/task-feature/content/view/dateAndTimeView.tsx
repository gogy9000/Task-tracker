import { HStack, Icon, Text, VStack } from 'native-base'
import Entypo from '@expo/vector-icons/Entypo'
import React from 'react'

type DateAndTimeViewProps = {
  date: Date|null
  title?:string
}
export const DateAndTimeView: React.FC<DateAndTimeViewProps> = ({ date,title='' }) => {
  const deadLineDate = date ? new Date(date).toDateString() : ''
  const deadLineTime = date ? new Date(date).toTimeString() : ''
  return (
    <VStack>
      <HStack space={'sm'} justifyContent={'center'} alignItems={'flex-end'} >
        <Text  variant={'primary'}>{title}</Text>
        {!date && <Icon  as={Entypo} name='infinity' size={6} color='white' />}
      </HStack>
      {date && <VStack>
        <Text variant={'secondary'}>{`date: ${deadLineDate}`}</Text>
        <Text variant={'secondary'}>{`time: ${deadLineTime}`}</Text>
      </VStack>}
    </VStack>
  )
}