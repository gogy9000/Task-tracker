import React from 'react'
import { IconButton, useDisclose } from 'native-base'
import  FontAwesome  from '@expo/vector-icons/FontAwesome'
import { TaskItem } from 'app/DAL/types/types'
import { Api } from 'app/DAL/Api'
import { CommonModal } from 'app/View/commonModal'
import { PriorityModalButtons } from 'app/View/PriorityModalButtons'

const priorityIconsEntity={
  1:{name:'thermometer-0'},
  2:{name:'thermometer-1'},
  3:{name:'thermometer-2'},
  4:{name:'thermometer-4'}
}



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

                    as: FontAwesome, name: priorityIconsEntity[task.priority].name,
                    color: 'warmGray.50',
                    _web: { size: '6' }
                  }}
      />
      <CommonModal
        modalHeader={'Select priority'}
        modalFooterContent={<PriorityModalButtons onPressHandler={selectPriority}/>}
        showModal={isOpen}
        onCloseCallback={onToggle} />
    </>
  )
}

