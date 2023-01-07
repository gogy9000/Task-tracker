import { TaskItem } from 'app/DAL/types/types'
import { Api } from 'app/DAL/Api'
import { useDisclose } from 'native-base'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { CommonModal } from 'app/components/commonModal/commonModal'
import { TimePicker } from 'app/components/timePicker/timePicker'
import React from 'react'
import {
  StartDateModalBody
} from 'app/features/task-feature/content/controllers/startDateController/StartDateModalBody'
import { ButtonWithLoader } from 'app/components/activityIconButton/ButtonWithLoader'

export const StartDateController = ({ task }: { task: TaskItem }) => {
  const [putTask, { isLoading }] = Api.usePutTaskMutation()
  const { isOpen, onToggle } = useDisclose()

  const onStart = (date: Date) => {
    onToggle()
    putTask({ ...task, startDate: date })

  }

  return (
    <>
      <ButtonWithLoader onPressOut={onToggle}
                        isLoading={isLoading}
                        bg='indigo.500'
                        colorScheme='indigo'
                        _icon={{
                          as: MaterialIcons, name: 'date-range'
                        }}
      />
      <CommonModal showModal={isOpen}
                   onCloseCallback={onToggle}
                   modalHeader={'Select start date'}
                   modalFooterContent={<TimePicker rightButtonTitle={'Start task'} onRightButton={onStart} />}
                   modalBody={<StartDateModalBody />}
      />
    </>
  )
}



