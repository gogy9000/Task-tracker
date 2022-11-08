import React, { useState } from 'react'
import { Button } from 'native-base'
import { CommonModal } from 'app/View/commonModal'
import { TimePicker } from 'app/View/timePicker'

export const StartDateContainer = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Button onPress={() => {
        setShowModal(true)
      }}>select start date</Button>
      <CommonModal showModal={showModal} setShowModal={setShowModal}>
        <TimePicker />
      </CommonModal>
    </>
  )
}