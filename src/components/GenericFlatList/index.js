import { FlatList } from 'react-native'
import React from 'react'

const index = ({ DATA, renderItem }) =>{
  return (
    <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}

    />
  )
}

export default index
