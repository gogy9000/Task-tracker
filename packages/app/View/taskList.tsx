import React, { useState } from 'react'
import { TodoContainer } from './TodoContainer'
import { useAppDispatch, useAppSelector } from '../CustomHooks/CustomHooks'
import {
  Badge,
  Box,
  Center,
  CheckCircleIcon,
  Flex,
  Heading,
  HStack,
  Icon, IconButton,
  Input,
  Pressable,
  Text,
  VStack
} from 'native-base'
import { ContentView } from 'app/View/ContentView'
import { Api } from 'app/DAL/Api'
import { ListRenderItem } from 'react-native'
import { ErrorType, TaskItem } from 'app/DAL/types/types'
import { ViewModContainer } from 'app/View/ViewModContainer'


export const TaskList = () => {
  const todo = useAppSelector(state => state.navigateParamsState.currentTodo)
  const { data, isLoading, isError, refetch, error } = Api.useGetTasksQuery({ todolistId: todo._id })
  const taskList = data?.items


  const render: ListRenderItem<TaskItem> = ({ item: task }) => {

    return <TaskDescription task={task}/>
  }


  return (
    <ContentView content={taskList}
                 listKey={'tasklist'}
                 renderItem={render}
                 isLoading={isLoading}
                 isError={isError}
                 refetch={refetch}
                 error={error as ErrorType}

    />
  )
}
type TaskDescriptionProps={
  task:TaskItem
}
const TaskDescription:React.FC<TaskDescriptionProps>=({ task })=>{
  const [putTask,putTaskResponse]=Api.usePutTaskMutation()
  const onPutTask=(payload)=>{
    console.log(payload)
    putTask({...task,...payload})
  }

  return(
    <ViewModContainer>
      <VStack>
        <Heading>title:{task.title}</Heading>
        <DetailsContentContainer PayloadKey={'description'}  onPutTask={onPutTask} title={'description:'} value={task.description} />
        <DetailsContentContainer PayloadKey={'startDate'} onPutTask={onPutTask} title={'startDate:'} value={task.startDate} />
        <DetailsContentContainer PayloadKey={'addedDate'} onPutTask={onPutTask} title={'addedDate:'} value={task.addedDate} />
        <DetailsContentContainer PayloadKey={'deadline'} onPutTask={onPutTask} title={'deadline:'} value={task.deadline} />
        <DetailsContentContainer PayloadKey={'priority'} onPutTask={onPutTask} title={'priority:'} value={task.priority} />
        <DetailsContentContainer PayloadKey={'status'} onPutTask={onPutTask} title={'status:'} value={task.status} />
      </VStack>
    </ViewModContainer>
  )
}

type DetailsContentContainerProps={
  title:string
  value?:string|number|null
  onPutTask:(payload:Partial<TaskItem>)=>void
  PayloadKey:keyof TaskItem
}
const DetailsContentContainer:React.FC<DetailsContentContainerProps> = ({ title,value,onPutTask,PayloadKey }) => {
  const [inputValue, setInputValue] = useState(value)

  const onPressHandler = () => {
    if(inputValue){
      onPutTask({[PayloadKey]:inputValue})
    }


  }

  return (
    <HStack alignItems={'center'} justifyContent={'space-between'}>
      <Text fontSize={"sm"}>{title}</Text>
      <Input onChangeText={setInputValue}
             _focus={{ borderColor: 'rgb(37,99,234)' }}
             borderColor={'rgb(100,98,98)'}
             flexGrow={2}
             size={"md"}
             variant={'underlined'}
             value={inputValue?.toString()}

      />
      <IconButton icon={<CheckCircleIcon size={5}  color='muted.400' />}  onPress={onPressHandler}/>


    </HStack>
  )
}


const EditableText = ({ initialValue }) => {
  const [inputValue, setInputValue] = useState(initialValue)
  const [editMode, setEditMode] = useState(false)

  const onPressHandler = () => {
    setEditMode(!editMode)
  }
  console.log(inputValue)
  return <>
      <Input onChangeText={setInputValue}
             flexGrow={2}
             size={"md"}
             variant={'underlined'}
             value={inputValue}
             InputRightElement={
               <Pressable onPress={onPressHandler}>
                 <CheckCircleIcon size={5} mr='2' color='muted.400' />
               </Pressable>
             }
      />
  </>


}

// function Example() {
//   return <Box alignItems="center">
//     <Pressable maxW="96">
//       {({
//           isHovered,
//           isFocused,
//           isPressed
//         }) => {
//         return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
//           transform: [{
//             scale: isPressed ? 0.96 : 1
//           }]
//         }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
//           <HStack alignItems="center">
//             <Badge colorScheme="darkBlue" _text={{
//               color: "white"
//             }} variant="solid" rounded="4">
//               Business
//             </Badge>
//
//             <Text fontSize={10} color="coolGray.800">
//               1 month ago
//             </Text>
//           </HStack>
//           <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
//             Marketing License
//           </Text>
//           <Text mt="2" fontSize="sm" color="coolGray.700">
//             Unlock powerfull time-saving tools for creating email delivery
//             and collecting marketing data
//           </Text>
//           <Flex>
//             {isFocused ? <Text mt="2" fontSize={12} fontWeight="medium" textDecorationLine="underline" color="darkBlue.600" alignSelf="flex-start">
//               Read More
//             </Text> : <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
//               Read More
//             </Text>}
//           </Flex>
//         </Box>;
//       }}
//     </Pressable>
//   </Box>;
// }
