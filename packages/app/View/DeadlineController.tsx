import { Api } from 'app/DAL/Api'
import { IconButton, useDisclose } from 'native-base'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { CommonModal } from 'app/View/commonModal'
import { TimePicker } from 'app/View/timePicker'
import React from 'react'
import { TaskItem } from 'app/DAL/types/types'
import { DeadlineModalBody } from 'app/View/DeadlineModalBody'

type DeadlineControllerProps={
  task:TaskItem
}
export const DeadlineController:React.FC<DeadlineControllerProps> = ({ task }) => {
  const [putTask, { isLoading }] = Api.usePutTaskMutation()
  const { isOpen, onToggle } = useDisclose()

  const selectDeadlineDate = (date: Date) => {
    onToggle()
    putTask({ ...task, deadline: date })

  }

  return (
    <>
      <IconButton mb='4' variant='solid' bg='red.400' colorScheme='yellow'
                  onPressOut={onToggle}
                  borderRadius='full'
                  _icon={{
                    as: MaterialCommunityIcons,
                    name: 'consolidate',
                    color: 'warmGray.50',
                    _web: { size: '6' }
                  }}
      />
      <CommonModal showModal={isOpen}
                   onCloseCallback={onToggle}
                   modalHeader={'Select deadline'}
                   modalFooterContent={<TimePicker rightButtonTitle={'select deadline'}
                                                   onRightButton={selectDeadlineDate} />}
                   modalBody={<DeadlineModalBody />}
      />
    </>
  )
}



