import React from 'react'
import { Button, HStack } from 'native-base'

type PriorityModalBodyProps = {
  onPressHandler: (priority: number) => void
}
export const PriorityModalBody: React.FC<PriorityModalBodyProps> = ({ onPressHandler }) => {
  return (
    <HStack flex={1} space={'xs'}>
      <Button colorScheme={'green'} onPress={() => {
        onPressHandler(1)
      }} flex={1}>low</Button>
      <Button onPress={() => {
        onPressHandler(2)
      }} flex={1}>norm</Button>
      <Button onPress={() => {
        onPressHandler(3)
      }} colorScheme={'orange'} flex={1}>high</Button>
      <Button onPress={() => {
        onPressHandler(4)
      }} colorScheme={'red'} flex={1}>top</Button>
    </HStack>
  )
}