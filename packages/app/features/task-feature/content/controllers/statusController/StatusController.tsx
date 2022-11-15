import React from 'react'
import { Api } from 'app/DAL/Api'
import { Button, IconButton, useDisclose, Skeleton, Spinner, ZStack, Box, Center, Factory, Icon } from 'native-base'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { CommonModal } from 'app/components/commonModal/commonModal'
import { StatusModalButtons } from 'app/features/task-feature/content/controllers/statusController/StatusModalButtons'
import { TaskItem } from 'app/DAL/types/types'
import { iconsEntity } from 'app/features/task-feature/content/controllers/statusController/IconsEntity'
import { ActivityIndicator } from 'react-native'


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
    <Center>

      <ActivityIconButton isLoading={isLoading} task={task} onPress={onToggle} />
      <CommonModal
        modalFooterContent={<StatusModalButtons onPressHandler={selectPriority} />}
        modalHeader={'Select priority'}
        showModal={isOpen}
        onCloseCallback={onToggle} />
    </Center>
  )
}

const ActivityIconButton = ({ onPress, task,isLoading }) => {
  return (
      <Button onPressOut={onPress}
              w={'10'}
              h={'10'}
              rounded={'full'}
              colorScheme={iconsEntity[task.status].colorScheme}
              isLoading={isLoading}
              mb='4'
      >
        {!isLoading&&<Icon as={MaterialCommunityIcons}
               name={iconsEntity[task.status].name}
               color={'warmGray.50'}
               _web={{ size: '6' }}
        />}
      </Button>
  )
}



