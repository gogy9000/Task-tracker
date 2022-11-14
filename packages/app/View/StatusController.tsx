import React from 'react'
import { Api } from 'app/DAL/Api'
import { IconButton, useDisclose } from 'native-base'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { CommonModal } from 'app/View/commonModal'
import { StatusModalButtons } from 'app/View/StatusModalButtons'
import { TaskItem } from 'app/DAL/types/types'

export const iconsEntity={
  0:{name:'coffee', colorScheme:'indigo'},
  1:{name:'crane',colorScheme:'blue'},
  2:{name:'check-circle',colorScheme:'green'},
  3:{name:'emoticon-poop',colorScheme:'red'}
}

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
      <IconButton onPressOut={onToggle} mb='4' variant='solid'  colorScheme={iconsEntity[task.status].colorScheme}
                  borderRadius='full'
                  _icon={{
                    as: MaterialCommunityIcons, name: iconsEntity[task.status].name,
                    color: 'warmGray.50',
                    _web: { size: '6' }
                  }}
      />
      <CommonModal
        modalFooterContent={<StatusModalButtons  onPressHandler={selectPriority} />}
        modalHeader={'Select priority'}
        showModal={isOpen}
        onCloseCallback={onToggle} />
    </>
  )
}