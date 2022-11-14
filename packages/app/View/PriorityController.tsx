import React from 'react'
import { Button, HStack, IconButton, useDisclose } from 'native-base'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { TaskItem } from 'app/DAL/types/types'
import { Api } from 'app/DAL/Api'
import { CommonModal } from 'app/View/commonModal'

type PriorityControllerProps = {
  task: TaskItem
}
export const PriorityController: React.FC<PriorityControllerProps> = ({ task }) => {
  const [putTask, { isLoading }] = Api.usePutTaskMutation()
  const { isOpen, onToggle } = useDisclose()

  const selectPriority = (priority: number) => {
    onToggle()
    putTask({ ...task, priority })

  }

  return (
    <>
      <IconButton onPressOut={onToggle} mb='4' variant='solid' bg='teal.400' colorScheme='teal'
                  borderRadius='full'
                  _icon={{
                    as: MaterialIcons, name: 'priority-high',
                    color: 'warmGray.50',
                    _web: { size: '6' }
                  }}
      />
      <CommonModal

        modalBody={<PriorityModalBody onPressHandler={selectPriority}/>}
        modalHeader={'Select priority'}
        showModal={isOpen}
        onCloseCallback={onToggle} />
    </>
  )
}
type PriorityModalBodyProps={
  onPressHandler:(priority:number)=>void
}

const PriorityModalBody:React.FC<PriorityModalBodyProps> = ({onPressHandler}) => {
  return(
    <HStack  space={'sm'} justifyContent={'stretch'}>
      <Button onPress={()=>{onPressHandler(1)}} flex={1}>low</Button>
      <Button onPress={()=>{onPressHandler(2)}} colorScheme={'green'} flex={1}>normal</Button>
      <Button onPress={()=>{onPressHandler(3)}} colorScheme={'orange'} flex={1}>high</Button>
      <Button onPress={()=>{onPressHandler(4)}} colorScheme={'red'} flex={1}>very high</Button>
    </HStack>
  )
}