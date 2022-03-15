import React from 'react'
import { Text } from 'react-native'
import GenericContainer from '../containers/GenericContainer'
import { userSession } from '../store/reducers/userSession'
import LoadingSpinner from '../components/LoadingSpinner'
import { useSelector } from 'react-redux'

const TestPosition = () => {
  const position = useSelector(userSession.getState)

  return (
    <GenericContainer>
      {position
        ? (
        <>
          <Text>{position?.lastPosition?.latitude}</Text>
          <Text>{position?.lastPosition?.longitude}</Text>
        </>
          )
        : <LoadingSpinner />}
    </GenericContainer>
  )
}

export default TestPosition
