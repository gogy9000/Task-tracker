import React, { useState } from 'react'
import { Platform } from 'react-native'
import { Button, Text, View } from 'native-base'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'

export const TimePicker = () => {
  const [date, setDate] = useState(new Date(Date.now()))
  const [mode, setMode] = useState<'date' | 'time'>('date')
  const [show, setShow] = useState(false)
  console.log(mode)
  console.log(show)


  const onChange = (event:DateTimePickerEvent, selectedDate:Date) => {
    const currentDate = selectedDate
    setShow(false)
    setDate(currentDate)
  }

  const showMode = (currentMode:'date' | 'time') => {
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

  return (
    <View>
      <Button onPress={showDatepicker}>Show date picker!</Button>
      <Button onPress={showTimepicker}>Show time picker!</Button>
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  )
}