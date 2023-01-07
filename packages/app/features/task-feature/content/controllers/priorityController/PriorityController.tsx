import React from 'react'
import { useDisclose } from 'native-base'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { TaskItem } from 'app/DAL/types/types'
import { Api } from 'app/DAL/Api'
import { CommonModal } from 'app/components/commonModal/commonModal'
import {
  PriorityModalButtons
} from 'app/features/task-feature/content/controllers/priorityController/PriorityModalButtons'
import {
  priorityIconsEntity
} from 'app/features/task-feature/content/controllers/priorityController/PriorityIconsEntity'
import { ButtonWithLoader } from 'app/components/activityIconButton/ButtonWithLoader'

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
      <ButtonWithLoader isLoading={isLoading} onPressOut={onToggle}
                        colorScheme={priorityIconsEntity[task.priority].colorScheme}
                        _icon={{ as: FontAwesome,
                            name: priorityIconsEntity[task.priority].name,
      }}
      />
      <CommonModal
        modalHeader={'Select priority'}
        modalFooterContent={<PriorityModalButtons onPressHandler={selectPriority} />}
        showModal={isOpen}
        onCloseCallback={onToggle} />
    </>
  )
}

