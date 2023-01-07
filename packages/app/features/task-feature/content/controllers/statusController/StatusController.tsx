import React from 'react'
import { Api } from 'app/DAL/Api'
import { useDisclose } from 'native-base'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { CommonModal } from 'app/components/commonModal/commonModal'
import { StatusModalButtons } from 'app/features/task-feature/content/controllers/statusController/StatusModalButtons'
import { TaskItem } from 'app/DAL/types/types'
import { iconsEntity } from 'app/features/task-feature/content/controllers/statusController/IconsEntity'
import { ButtonWithLoader } from 'app/components/activityIconButton/ButtonWithLoader'


type StatusControllerProps = {
  task: TaskItem
}

export const StatusController: React.FC<StatusControllerProps> = ({ task }) => {
  const [putTask, { isLoading }] = Api.usePutTaskMutation()
  const { isOpen, onToggle } = useDisclose()

  const selectPriority = (status: number) => {
    putTask({ ...task, status })
    onToggle()

  }
  return (
    <>
      <ButtonWithLoader
        isLoading={isLoading}
        onPressOut={onToggle}
        colorScheme={iconsEntity[task.status].colorScheme}
        _icon={{
          as: MaterialCommunityIcons,
          name: iconsEntity[task.status].name
        }}
      />
      <CommonModal
        modalFooterContent={<StatusModalButtons onPressHandler={selectPriority} />}
        modalHeader={'Select priority'}
        showModal={isOpen}
        onCloseCallback={onToggle} />
    </>
  )
}



