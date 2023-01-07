import { Stagger, useDisclose, VStack } from 'native-base'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo'
import { TaskItem } from 'app/DAL/types/types'
import {
  StartDateController
} from 'app/features/task-feature/content/controllers/startDateController/StartDateController'
import { DeadlineController } from 'app/features/task-feature/content/controllers/deadlineController/DeadlineController'
import { IStaggerStyleProps } from 'native-base/lib/typescript/components/composites/Transitions/Stagger'
import { PriorityController } from 'app/features/task-feature/content/controllers/priorityController/PriorityController'
import { StatusController } from 'app/features/task-feature/content/controllers/statusController/StatusController'
import { ButtonWithLoader } from 'app/components/activityIconButton/ButtonWithLoader'


const exit = {
  translateY: 34,
  scale: 0.5,
  opacity: 0,
  transition: {
    duration: 100,
    stagger: {
      offset: 30
    }
  }
}
const animate: IStaggerStyleProps = {
  translateY: 0,
  scale: 1,
  opacity: 1,
  transition: {
    type: 'spring',
    mass: 0.8,
    stagger: {
      offset: 30
    }
  }
}

const initial = {
  opacity: 0,
  scale: 0,
  translateY: 34
}

type StaggProps = {
  task: TaskItem
}
export const Stagg: React.FC<StaggProps> = ({ task }) => {
  const { isOpen, onToggle } = useDisclose()

  return (
    <VStack space={'sm'} alignItems={'center'}>
      <ButtonWithLoader
        onPress={onToggle} bg='cyan.400'
        _icon={{
          as: Entypo,
          name: 'dots-three-horizontal'
        }}
      />
      <VStack flex={1} justifyContent={'space-evenly'} alignItems={'center'}>
        <Stagger visible={isOpen} initial={initial} animate={animate} exit={exit}>
          <StartDateController task={task} />
          <DeadlineController task={task} />
          <PriorityController task={task} />
          <StatusController task={task} />
        </Stagger>
      </VStack>
    </VStack>
  )
}

