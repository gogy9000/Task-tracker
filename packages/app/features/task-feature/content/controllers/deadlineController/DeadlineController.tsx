import { Api } from 'app/DAL/Api'
import { useDisclose } from 'native-base'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { CommonModal } from 'app/components/commonModal/commonModal'
import { TimePicker } from 'app/components/timePicker/timePicker'
import React from 'react'
import { TaskItem } from 'app/DAL/types/types'
import { DeadlineModalBody } from 'app/features/task-feature/content/controllers/deadlineController/DeadlineModalBody'
import { ButtonWithLoader } from 'app/components/activityIconButton/ButtonWithLoader'

type DeadlineControllerProps = {
  task: TaskItem
}
export const DeadlineController: React.FC<DeadlineControllerProps> = ({ task }) => {
  const [putTask, { isLoading }] = Api.usePutTaskMutation()
  const { isOpen, onToggle } = useDisclose()

  const selectDeadlineDate = (date: Date) => {
    onToggle()
    putTask({ ...task, deadline: date })

  }

  return (
    <>
      <ButtonWithLoader colorScheme='red'
                        isLoading={isLoading}
                        onPressOut={onToggle}
                        _icon={{
                            as: MaterialCommunityIcons,
                            name: 'consolidate'
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



