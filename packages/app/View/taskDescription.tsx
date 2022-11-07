import { TaskItem } from 'app/DAL/types/types'
import React, { useState } from 'react'
import { Api } from 'app/DAL/Api'
import { ViewModContainer } from 'app/View/ViewModContainer'
import { Button, FormControl, Input, Modal, VStack } from 'native-base'
import { DetailsContentContainer } from 'app/View/detailsContentContainer'
import { TaskTitleContainer } from 'app/View/taskTitleContainer'
import { DescriptionContainer } from 'app/View/descriptionContainer'


type TaskDescriptionProps = {
  task: TaskItem
}
export const TaskDescription: React.FC<TaskDescriptionProps> = ({ task }) => {

  const [putTask, { isLoading }] = Api.usePutTaskMutation()
  const onPutTask = (payload: Partial<TaskItem>) => {
    putTask({ ...task, ...payload })
  }

  return (
    <ViewModContainer>
      <VStack>
        <TaskTitleContainer task={task} />
        <DescriptionContainer task={task}/>
        <StartDateContainer task={task}/>
        <DetailsContentContainer PayloadKey={'addedDate'}
                                 onPutTask={onPutTask}
                                 title={'addedDate:'}
                                 value={task.addedDate} />
        <DetailsContentContainer PayloadKey={'deadline'}
                                 onPutTask={onPutTask}
                                 title={'deadline:'}
                                 value={task.deadline} />
        <DetailsContentContainer PayloadKey={'priority'}
                                 onPutTask={onPutTask} title={'priority:'}
                                 value={task.priority} />
        <DetailsContentContainer PayloadKey={'status'}
                                 onPutTask={onPutTask}
                                 title={'status:'}
                                 value={task.status} />
      </VStack>
    </ViewModContainer>
  )
}
const StartDateContainer=({task})=>{
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true)
  }
  return (
    <>
    <DetailsContentContainer PayloadKey={'startDate'}
                                  onPutTask={()=>{}}
                                  title={'startDate:'}
                                  value={task.startDate} />
      <Button onPress={() => setShowModal(true)}>Button</Button>
      <Modal isOpen={showModal} onClose={()=> {
        setShowModal(false)
      }}
      >
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton/>
          <Modal.Header>Start date</Modal.Header>

          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>

          <Modal.Footer>
            <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
              Cancel
            </Button>
            <Button onPress={() => {
              setShowModal(false);
            }}>
              Save
            </Button>
          </Button.Group>
          </Modal.Footer>

        </Modal.Content>
      </Modal>
    </>
  )
}
