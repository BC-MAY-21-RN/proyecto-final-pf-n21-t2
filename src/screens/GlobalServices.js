import React from 'react'
import CardGeneric from '../components/GenericCard'
import CustomFlatList from '../components/CustomFlatList'
import GenericContainer from '../containers/GenericContainer'
import fbShortcuts from '../assets/controllers/firebaseShortcuts'
import { userSession } from '../store/reducers/userSession'

const finalUpdateClients = (data, setClients, walkings) => {
  data.forEach((client, index) => {
    client.forEach(clientData => {
      const clientRow = clientData.data()
      walkings[index].image = fbShortcuts.getImage(`Users%2F${clientRow.useruid}%2F${clientRow.imageName}`)
      walkings[index].username = clientRow.username
    })
  })
  setClients(walkings)
}

const getArrData = screenType => {
  const isPayed = screenType === 1 ? '0' : '1'
  const userType = screenType === 3 ? 'clientId' : 'walkerId'
  const userTypeImageId = screenType === 3 ? 'walkerId' : 'clientId'
  return [isPayed, userType, userTypeImageId]
}

const getClients = (screenType) => {
  const [isPayed, userType, userTypeImageId] = getArrData(screenType)
  return setClients => {
    const currentUserId = userSession.getState().id
    fbShortcuts.getCollection('Walkings').where(userType, '==', currentUserId)
      .where('isPayed', '==', isPayed).get()
      .then(async (querySnapshot) => {
        const walkings = []
        await new Promise(resolve => {
          const getClients = []
          querySnapshot.forEach(async (snapshot) => {
            const row = snapshot.data()
            row.id = snapshot.id
            const user = fbShortcuts.getCollection('Users').where('useruid', '==', row[userTypeImageId]).get()
            getClients.push(user)
            walkings.push(row)
          })
          Promise.all(getClients).then(data => resolve(data))
        }).then(data => finalUpdateClients(data, setClients, walkings))
      })
  }
}

const getEmptyLabel = (value) => {
  return value ? 'No pending services' : 'No current services'
}

const getScreenType = routeName => {
  let type
  switch (routeName) {
    case 'HomeWalkerPendings':
      type = 1
      break
    case 'HomeClientCurrents':
      type = 3
      break
    default:
      type = 2
  }
  return type
}

const GlobalServices = ({ navigation, route }) => {
  const screenType = getScreenType(route.name)

  const renderItem = ({ item }) => (
    <CardGeneric
      navigation={navigation}
      Name={item.username}
      Duration={item.duration}
      Start={item.start}
      ImageUri={item.image}
      startDatetime={item.startDatetime}
      endDatetime={item.endDatetime}
      pets={item.pets}
      id={item.id}
      walkerId={item.walkerId}
      screenType={screenType}
      />
  )

  return (
    <GenericContainer>
      <CustomFlatList render={renderItem} get={getClients(screenType)} empty={getEmptyLabel(screenType)} />
    </GenericContainer>
  )
}

export default GlobalServices
