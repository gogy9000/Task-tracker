import { FlatList, ListRenderItem, Text, View } from 'react-native'
import { Center, Spinner, useBreakpointValue } from 'native-base'
import { HeaderByTodoList } from 'app/View/HeaderByTodoList'
import { EmptyContent } from 'app/View/EmptyContent'
import React from 'react'
import { ErrorType } from 'app/DAL/types/types'

type ContentViewProps = {
  isLoading: boolean
  isError: boolean
  error: ErrorType
  refetch: (() => void) | null | undefined
  content: readonly any[] | null | undefined
  renderItem: ListRenderItem<any> | null | undefined
  listKey: string
}
export const ContentView:React.FC<ContentViewProps> = ({ isLoading, error, refetch, content, renderItem, listKey }) => {
  const breakPoint = useBreakpointValue({ base: 1, md: 2, xl: 3 })

  if (isLoading) {
    return (
      <Center flex={1}>
        <Spinner size={'lg'} />
      </Center>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        onRefresh={refetch}
        refreshing={isLoading}
        data={content}
        extraData={breakPoint}
        key={breakPoint}
        numColumns={breakPoint}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={breakPoint > 1 ? { alignSelf: 'center' } : undefined}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        ListHeaderComponent={<HeaderByTodoList />}
        ListEmptyComponent={<EmptyContent errorMessage={error?.data.message}/>}
        listKey={listKey}
      />
    </View>
  )
}