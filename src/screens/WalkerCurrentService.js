import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import GenericContainer from '../containers/GenericContainer'
import MapView, { Polyline } from 'react-native-maps'
import theme from '../themes/lights'
import { userSession } from '../store/reducers/userSession'
import DateShortcuts from '../assets/controllers/DateShortcuts'
import LoadingSpinner from '../components/LoadingSpinner'
import fbShortcuts from '../assets/controllers/firebaseShortcuts'

const styles = {
  header: {
    color: theme.color.secondary2,
    fontSize: theme.font.xl,
    borderBottomColor: theme.color.secondary2,
    borderBottomWidth: 2,
    marginBottom: theme.spacing.xs
  },
  map: {
    flex: 1
  },
  mapContainer: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 15
  },
  subTitle: {
    fontWeight: '500',
    fontSize: theme.font.m,
    marginBottom: theme.spacing.xs
  },
  red: {
    marginBottom: theme.spacing.xs,
    fontSize: theme.font.m,
    color: theme.color.danger,
    paddingRight: theme.spacing.m
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const LeftTime = ({ startDatetime, endDatetime, setWalkingPhase, walkingPhase }) => {
  const currentDatetime = new Date().getTime()
  const leftTime = parseInt(endDatetime) - currentDatetime
  let result
  let phase
  if (leftTime < 1000) {
    phase = 0
    result = (
      <Text style={styles.subTitle}>The walking has end, bring back the furry friends to their owner</Text>
    )
  } else if (parseInt(startDatetime) > currentDatetime && parseInt(endDatetime) < currentDatetime) {
    phase = 1
    const leftValue = DateShortcuts.getTravelValues(startDatetime, endDatetime)[2]
    result = (
      <>
        <Text style={styles.subTitle}>The walking ends in {leftValue}</Text>
        <View style={styles.row}>
          <Text style={styles.red}>Uploading current location</Text>
          <LoadingSpinner />
        </View>
      </>
    )
  } else {
    phase = 2
    const leftValue = DateShortcuts.getTravelValues(startDatetime, endDatetime)[1]
    result = (
      <Text style={styles.subTitle}>The walking starts in {leftValue}</Text>
    )
  }
  useEffect(() => {
    setWalkingPhase(phase)
  }, [walkingPhase])
  return (
    <View>{result}</View>
  )
}

let uploadLocationLoop

const uploadLocation = (walkingId) => {
  const { lastPosition } = userSession.getState()
  fbShortcuts.add('WalkingsTravel', null, {
    walkingId: walkingId,
    latitude: lastPosition.latitude,
    longitude: lastPosition.longitude
  }, () => {
  })
}

const getTravelData = (walkingId, setTravelLocations) => {
  fbShortcuts.getCollection('WalkingsTravel').where('walkingId', '==', walkingId).get().then(querySnapshot => {
    const result = []
    querySnapshot.forEach(snapshot => {
      result.push(snapshot.data())
    })
    setTravelLocations(result)
  })
}

const WalkerCurrentService = ({ route }) => {
  const { lastPosition } = userSession.getState()
  const [walkingPhase, setWalkingPhase] = useState(null)
  const [travelLocations, setTravelLocations] = useState(null)
  useEffect(() => {
    if (!uploadLocationLoop) {
      uploadLocationLoop = setInterval(() => {
        if (walkingPhase === 1) {
          uploadLocation(route.params.id)
          getTravelData(route.params.id, setTravelLocations)
        }
      }, 5000)
      return () => {
        clearInterval(uploadLocationLoop)
        uploadLocationLoop = null
      }
    }
  }, [walkingPhase])
  return (
    <GenericContainer>
      <Text style={styles.header}>Ruta del paseo</Text>
      <View style={styles.row}>
      <LeftTime setWalkingPhase={setWalkingPhase} walkingPhase={walkingPhase} startDatetime={route.params.startDatetime} endDatetime={route.params.endDatetime} />
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: lastPosition.latitude,
            longitude: lastPosition.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
        {travelLocations ? <Polyline coordinates={travelLocations} /> : null}
      </View>
    </GenericContainer>
  )
}

export default WalkerCurrentService
