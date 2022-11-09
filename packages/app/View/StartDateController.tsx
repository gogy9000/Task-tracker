import { TaskItem } from 'app/DAL/types/types'
import { Api } from 'app/DAL/Api'
import { Icon, IconButton, useDisclose,Text } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { CommonModal } from 'app/View/commonModal'
import { TimePicker } from 'app/View/timePicker'
import React from 'react'

export const StartDateController = ({ task }: { task: TaskItem }) => {
  const [putTask, { isLoading }] = Api.usePutTaskMutation()
  const onPutTask = (startDate: Date) => {
    putTask({ ...task, startDate })
  }

  const {
    isOpen,
    onToggle
  } = useDisclose()

  return (
    <>
      <IconButton onPress={onToggle} mb='4' variant='solid' bg='indigo.500' colorScheme='indigo' borderRadius='full'
                  icon={<Icon as={MaterialIcons} name='date-range' size='6' />}
                  _icon={{
                    color: 'warmGray.50',
                    _dark: {
                      color: 'warmGray.50'
                    }
                  }}
      />
      <CommonModal showModal={isOpen} setShowModal={onToggle}>
        <Text>azaza</Text>
        {/*<TimePicker callback={onPutTask} />*/}
      </CommonModal>
    </>
  )
}