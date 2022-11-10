import { Icon, IconButton, Stagger, useDisclose, VStack } from 'native-base'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { TaskItem } from 'app/DAL/types/types'
import { StartDateController } from 'app/View/StartDateController'

type StaggProps = {
  task: TaskItem
}
export const Stagg: React.FC<StaggProps> = ({ task }) => {
  const { isOpen, onToggle } = useDisclose()


  return <VStack space={'sm'} alignItems={'center'}>

      <IconButton variant='solid' borderRadius='full'
                  onPress={onToggle} bg='cyan.400'
                  _icon={{
                    as: Entypo,
                    name: 'dots-three-horizontal',
                    color: 'white',
                    _web:{size:'6'}
                  }}
      />

    <VStack flex={1} justifyContent={'space-evenly'} alignItems={'center'}>
      <Stagger visible={isOpen} initial={{
        opacity: 0,
        scale: 0,
        translateY: 34
      }} animate={{
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
      }} exit={{
        translateY: 34,
        scale: 0.5,
        opacity: 0,
        transition: {
          duration: 100,
          stagger: {
            offset: 30
          }
        }
      }}>
        <StartDateController task={task} />
        <IconButton mb='4' variant='solid' bg='red.400' colorScheme='yellow'
                    borderRadius='full'
                    _icon={{
                      as: MaterialCommunityIcons,
                      name: 'consolidate',
                      color: 'warmGray.50',
                      _web:{size:'6'}
                    }}
        />
        <IconButton mb='4' variant='solid' bg='teal.400' colorScheme='teal'
                    borderRadius='full'
                    _icon={{
                      as: MaterialIcons, name: 'priority-high',
                      color: 'warmGray.50',
                      _web:{size:'6'}
                    }}
        />

        <IconButton mb='4' variant='solid' bg='red.500' colorScheme='red'
                    borderRadius='full'
                    _icon={{
                      as: MaterialCommunityIcons, name: 'emoticon-dead-outline',
                      color: 'warmGray.50',
                      _web: { size: '6' }
                    }}
        />
      </Stagger>
    </VStack>
  </VStack>
}

