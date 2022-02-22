import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import LoadingSpinner from '../LoadingSpinner'
import EnfasisText from '../EnfasisText'

const CustomFlatList = ({ render, empty, get }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!data) {
      get(setData)
    }
  }, [])

  return !data
    ? <LoadingSpinner size="huge" scale={2} />
    : data.length !== 0
      ? <FlatList
      data={data}
      renderItem={render}
      refreshing={false}
      onRefresh={() => {
        setData(null)
        get(setData)
      }}
      keyExtractor={item => item.id}
    />
      : <EnfasisText text={empty} />
}

export default CustomFlatList
