import { FlatList, ListRenderItem } from 'react-native'
import { Center, Spinner, useBreakpointValue,View } from 'native-base'
import React, { ReactElement } from 'react'
import { ErrorType } from 'app/DAL/types/types'

type ContentViewProps = Partial<FlatList> & {
  isLoading?: boolean
  error?: ErrorType
  onRefresh?: (() => void) | null | undefined
  data: readonly any[] | null | undefined
  renderItem: ListRenderItem<any> | null | undefined
  listKey?: string
  ListHeaderComponent?: ReactElement
  ListEmptyComponent?: ReactElement
}

export const ContentView: React.FC<ContentViewProps> = (props) => {
  const {
    ListHeaderComponent, onRefresh,
    renderItem, isLoading, data,
    ListEmptyComponent,
    listKey,
    ...restProps
  } = props || {}

  const breakPoint = useBreakpointValue({ base: 1, md: 2, xl: 3 })

  if (isLoading) {
    return (
      <Center flex={1}>
        <Spinner size={'lg'} />
      </Center>
    )
  }
  return (
    <View flex={'1'} _dark={{bg:'warmGray.600'}}>
      <FlatList
        renderItem={renderItem}
        data={data}
        extraData={breakPoint}
        onRefresh={onRefresh}
        refreshing={isLoading}
        key={breakPoint}
        numColumns={breakPoint}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={breakPoint > 1 ? { alignSelf: 'center' } : undefined}
        keyExtractor={(item) => item._id}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={ListEmptyComponent}
        listKey={listKey}
        {...restProps}
      />
    </View>
  )
}