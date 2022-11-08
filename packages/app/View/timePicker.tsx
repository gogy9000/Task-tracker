import React, { useState } from 'react'
import { Platform } from 'react-native'
import { Button, Text, View } from 'native-base'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'

export const TimePicker = ({callback}) => {
  const [date, setDate] = useState<Date>(new Date())
  const [mode, setMode] = useState<'date' | 'time'>('date')
  const [show, setShow] = useState(false)

  const onChange = (event:DateTimePickerEvent, selectedDate:Date) => {
    const currentDate = selectedDate
    console.log("selectedDate",selectedDate)
    console.log("event",event)
    setShow(false)
    setDate(currentDate)
    callback(currentDate)
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