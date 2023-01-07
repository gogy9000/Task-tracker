import React, { FC, useState } from 'react'
import { Platform } from 'react-native'
import { Button, HStack } from 'native-base'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
interface ITimePickerProps {
  onRightButton:(date:Date)=>void
  rightButtonTitle:string
}
export const TimePicker:FC<ITimePickerProps> = ({ onRightButton, rightButtonTitle }) => {
  const [date, setDate] = useState<Date>(new Date())
  const [mode, setMode] = useState<'date' | 'time'>('date')
  const [show, setShow] = useState(false)

  const onChange = (event: DateTimePickerEvent, selectedDate: Date) => {
    setShow(false)
    setDate(selectedDate)
  }

  const showMode = (currentMode: 'date' | 'time') => {
    if (Platform.OS === 'android') {
      setShow(true)
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
  }

  const showTimepicker = () => {
    showMode('time')
  }
  const onRightButtonHandler = () => {
    onRightButton(date)
  }

  return (
    <HStack flex={1} justifyContent={'flex-end'} space={'sm'}>
      <Button onPress={showDatepicker}>Select date</Button>
      <Button onPress={showTimepicker}>Select time</Button>
      <HStack flex={1} justifyContent={'flex-end'}>
        <Button colorScheme={'red'}
                onPress={onRightButtonHandler}
        >
          {rightButtonTitle}
        </Button>
      </HStack>
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </HStack>
  )
}