import React from 'react'
import { Text } from 'react-native'
import GenericContainer from '../containers/GenericContainer'
import { userSession } from '../store/reducers/userSession'
import LoadingSpinner from '../components/LoadingSpinner'
import { useSelector } from 'react-redux'

const TestPosition = () => {
  const lastPosition = useSelector(userSession.getState)?.lastPosition

  return (
    <GenericContainer>
      {lastPosition
        ? (
        <>
          <Text>{lastPosition?.latitude}</Text>
          <Text>{lastPosition?.longitude}</Text>
        </>
          )
        : <LoadingSpinner size="huge" scale={2} />}
    </GenericContainer>
  )
}

export default TestPosition
