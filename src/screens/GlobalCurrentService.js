import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import GenericContainer from '../containers/GenericContainer'
import MapView, { Polyline } from 'react-native-maps'
import theme from '../themes/lights'
import { userSession } from '../store/reducers/userSession'
import DateShortcuts from '../assets/controllers/DateShortcuts'
import LoadingSpinner from '../components/LoadingSpinner'
import fbShortcuts from '../assets/controllers/firebaseShortcuts'
import CustomButton from '../components/CustomButton'
import MapViewDirections from 'react-native-maps-directions'

const styles = {
  map: {
    flex: 1
  },
  mapContainer: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 15,
    position: 'relative'
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
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: theme.spacing.m
  },
  header: {
    fontSize: theme.font.xl,
    color: theme.color.secondary2,
    borderBottomColor: theme.color.secondary2,
    borderBottomWidth: 2,
    marginBottom: theme.spacing.xs
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  buttonContainer: {
    marginTop: theme.spacing.xl,
    position: 'absolute',
    bottom: theme.spacing.xl,
    left: 0,
    right: 0
  }
}

const getCustomMessage = screenType => {
  return screenType === 3 ? 'the walker is returning with your friends' : 'bring back the furry friends to their owner'
}

const getCurrentUploadingText = (screenType) => {
  return screenType === 2
    ? (
    <View style={styles.row}>
    <Text style={styles.red}>Uploading current location</Text>
    <LoadingSpinner />
  </View>
      )
    : null
}

const LeftTime = ({ startDatetime, endDatetime, setWalkingPhase, walkingPhase, screenType }) => {
  const currentDatetime = new Date().getTime()
  const leftTime = parseInt(endDatetime) - currentDatetime
  let result
  let phase
  if (leftTime < 1000) {
    phase = 0
    const customMessage = getCustomMessage(screenType)
    result = (
      <Text style={styles.subTitle}>The walking has end, {customMessage}</Text>
    )
  } else if (parseInt(startDatetime) < currentDatetime && parseInt(endDatetime) > currentDatetime) {
    phase = 1
    const leftValue = DateShortcuts.getTravelValues(startDatetime, endDatetime)[2]
    result = (
      <>
        <Text style={styles.subTitle}>The walking ends in {leftValue}</Text>
        {getCurrentUploadingText(screenType)}
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

const finishWalking = (navigation, walker, setLoading) => {
  setLoading(true)
  fbShortcuts.updateDoc('Walkings', walker.id, {
    isPayed: '2'
  }, () => {
    setLoading(false)
    navigation.navigate('AddReview', walker)
  })
}

const getComplexTravelLocations = (travelLocations) => {
  return travelLocations?.length > 0
    ? {
        ...travelLocations[0]
      }
    : null
}

const MapRoute = ({ travelLocations }) => {
  return travelLocations
    ? (
    <MapViewDirections
    origin={travelLocations[0]}
    destination={travelLocations[travelLocations.length - 1]}
    apikey="AIzaSyBzU8R59mOHoOmCI0OiHuTd2lgoCYD-2AA"
    mode="WALKING"
    strokeWidth={3}
    strokeColor={theme.color.primary2}
  />
      )
    : null
}

const GlobalCurrentService = ({ navigation, route }) => {
  const [walkingPhase, setWalkingPhase] = useState(null)
  const [travelLocations, setTravelLocations] = useState(null)
  const [loadingFinish, setLoadingFinish] = useState(false)
  const handleFinishWalking = () => {
    const walker = {
      id: route.params.id,
      walkerId: route.params.walkerId,
      image: route.params.ImageUri,
      name: route.params.Name
    }
    finishWalking(navigation, walker, setLoadingFinish)
  }
  useEffect(() => {
    if (!uploadLocationLoop) {
      uploadLocationLoop = setInterval(() => {
        if (walkingPhase === 1 && route.params.screenType === 2) {
          uploadLocation(route.params.id)
        }
        getTravelData(route.params.id, setTravelLocations)
      }, 5000)
      return () => {
        clearInterval(uploadLocationLoop)
        uploadLocationLoop = null
      }
    }
  }, [walkingPhase])

  const usedPosition = getComplexTravelLocations(travelLocations)

  const currentRegion = {
    ...usedPosition,
    latitudeDelta: 0.0100,
    longitudeDelta: 0.0100
  }

  return (
    <GenericContainer>
      <Text style={styles.header}>Walking road</Text>
      <View style={styles.row}>
        <LeftTime setWalkingPhase={setWalkingPhase} screenType={route.params.screenType} walkingPhase={walkingPhase} startDatetime={route.params.startDatetime} endDatetime={route.params.endDatetime} />
      </View>
      <View style={styles.mapContainer}>
        {usedPosition
          ? (
          <MapView
            style={styles.map}
            // region={currentRegion}
            initialRegion={currentRegion}>
              <MapRoute travelLocations={travelLocations} />
            </MapView>
            )
          : <LoadingSpinner size="huge" scale={2} />}
          {walkingPhase === 0 && route.params.screenType === 3
            ? (
            <View style={styles.buttonContainer}>
              <CustomButton title="Finish walking" loading={loadingFinish} onPress={handleFinishWalking} />
            </View>
              )
            : null}
      </View>
    </GenericContainer>
  )
}

export default GlobalCurrentService
