import React from 'react'
import { IconButton, useDisclose } from 'native-base'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { TaskItem } from 'app/DAL/types/types'
import { Api } from 'app/DAL/Api'
import { CommonModal } from 'app/View/commonModal'
import { PriorityModalBody } from 'app/View/PriorityModalBody'

type PriorityControllerProps = {
  task: TaskItem
}
export const PriorityController: React.FC<PriorityControllerProps> = ({ task }) => {
  const [putTask, { isLoading }] = Api.usePutTaskMutation()
  const { isOpen, onToggle } = useDisclose()

  const selectPriority = (priority: number) => {
    putTask({ ...task, priority })
    onToggle()

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

        // modalBody={<PriorityModalBody onPressHandler={selectPriority}/>}
        modalHeader={'Select priority'}
        modalFooterContent={<PriorityModalBody onPressHandler={selectPriority}/>}
        showModal={isOpen}
        onCloseCallback={onToggle} />
    </>
  )
}

