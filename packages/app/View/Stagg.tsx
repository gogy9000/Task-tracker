import { Box, Center, HStack, Icon, IconButton, Stagger, useDisclose, VStack } from 'native-base'
import React from 'react'
import { Entypo, Ionicons, MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons'

export const Stagg = () => {
  const {
    isOpen,
    onToggle
  } = useDisclose()
  return <VStack space={'sm'}>
    <VStack>
      <IconButton variant='solid' borderRadius='full' size='lg'
                  onPress={onToggle} bg='cyan.400'
                  icon={<Entypo name='dots-three-horizontal' size={24} />}
                  _icon={{ color: 'white' }}
      />
    </VStack>
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
        <IconButton mb='4' variant='solid' bg='indigo.500' colorScheme='indigo' borderRadius='full'
                    icon={<Icon as={MaterialIcons} name='date-range' size='6' />}
                    _icon={{
                      color: 'warmGray.50',
                      _dark: {
                        color: 'warmGray.50'
                      }
                    }}
        />
        <IconButton mb='4' variant='solid' bg='red.400' colorScheme='yellow' borderRadius='full'
                    icon={<Icon as={MaterialCommunityIcons} name='consolidate' _dark={{
                      color: 'warmGray.50'
                    }} size='6'  color='warmGray.50' />} />

        <IconButton mb='4' variant='solid' bg='teal.400' colorScheme='teal' borderRadius='full'
                    icon={<Icon as={MaterialIcons } _dark={{
                      color: 'warmGray.50'
                    }} size='6' name='priority-high' color='warmGray.50' />} />

        <IconButton mb='4' variant='solid' bg='red.500' colorScheme='red' borderRadius='full'
                    icon={<Icon as={MaterialCommunityIcons } size='6' name='emoticon-dead-outline' _dark={{
                      color: 'warmGray.50'
                    }} color='warmGray.50' />}/>
      </Stagger>
    </VStack>
  </VStack>
}