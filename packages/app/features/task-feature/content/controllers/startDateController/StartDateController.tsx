import { TaskItem } from 'app/DAL/types/types'
import { Api } from 'app/DAL/Api'
import { IconButton, useDisclose } from 'native-base'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { CommonModal } from 'app/components/commonModal/commonModal'
import { TimePicker } from 'app/components/timePicker/timePicker'
import React from 'react'
import { StartDateModalBody } from 'app/features/task-feature/content/controllers/startDateController/StartDateModalBody'

export const StartDateController = ({ task }: { task: TaskItem }) => {
  const [putTask, { isLoading }] = Api.usePutTaskMutation()
  const { isOpen, onToggle } = useDisclose()

  const onStart = (date:Date) => {
    onToggle()
    putTask({ ...task, startDate: date })

  }

  return (
    <>
      <IconButton onPressOut={onToggle}
                  mb='4'
                  variant='solid'
                  bg='indigo.500'
                  colorScheme='indigo'
                  borderRadius='full'
                  _icon={{
                    as: MaterialIcons, name: 'date-range',
                    color: 'warmGray.50',
                    _web: { size: '6' }
                  }}
      />
      <CommonModal showModal={isOpen}
                   onCloseCallback={onToggle}
                   modalHeader={'Select start date'}
                   modalFooterContent={ <TimePicker rightButtonTitle={'Start task'} onRightButton={onStart}  />}
                   modalBody={<StartDateModalBody />}
      />
    </>
  )
}



