import { Button, HStack, VStack } from 'native-base'
import React from 'react'
import { iconsEntity } from './StatusController'
type StatusModalBodyProps={
  onPressHandler:(status:number) =>void
}
export const StatusModalButtons:React.FC<StatusModalBodyProps> = ({onPressHandler }) => {
  return (
    <VStack flex={1} space={'sm'}>
      <HStack space={'sm'}>
      <Button colorScheme={iconsEntity[0].colorScheme} onPress={() => {

        onPressHandler(0)
      }} flex={1}>idle</Button>
      <Button onPress={() => {
        onPressHandler(1)
      }} colorScheme={iconsEntity[1].colorScheme} flex={1}>in progress</Button>
    </HStack>
  <HStack space={'sm'}>
      <Button onPress={() => {
        onPressHandler(2)
      }} colorScheme={iconsEntity[2].colorScheme} flex={1}>completed</Button>
      <Button onPress={() => {
        onPressHandler(3)
      }} colorScheme={iconsEntity[3].colorScheme} flex={1}>failure</Button>
    </HStack >
    </VStack>
  )
}