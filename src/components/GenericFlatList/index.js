import { FlatList } from 'react-native'
import React from 'react'

const index = ({ DATA, renderItem, styles }) => {
  return (
    <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => `${item.useruid}${Math.floor(Math.random() * 100000000)}` }
        style={styles}
    />
  )
}

export default index
