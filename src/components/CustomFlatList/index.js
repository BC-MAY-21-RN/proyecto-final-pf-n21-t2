import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import LoadingSpinner from '../LoadingSpinner'
import EnfasisText from '../EnfasisText'
import { useIsFocused } from '@react-navigation/native'

const CustomFlatList = ({ render, empty, get }) => {
  const [data, setData] = useState(null)
  const isFocused = useIsFocused()

  useEffect(() => {
    if (!isFocused) {
      setData(null)
    }
    if (!data && isFocused) {
      get(setData)
    }
  }, [data, isFocused])

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
