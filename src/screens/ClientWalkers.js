import React from 'react'
import WalkerCard from '../components/WalkerCard'
import GenericContainer from '../containers/GenericContainer'
import CustomFlatList from '../components/CustomFlatList'
import fbShortcuts from '../assets/controllers/firebaseShortcuts'
import { userSession } from '../store/reducers/userSession'

const getDiference = (val1, val2) => {
  return Math.abs(Math.abs(val1) - Math.abs(val2))
}

const isNearEnought = (lastPosition, currentPosition) => {
  const oneMinute = 1000 * 60
  const maxDistance = 0.01
  if (!currentPosition) {
    return true
  } else if ((new Date().getTime() - lastPosition.timestamp) > oneMinute &&
    getDiference(lastPosition.latitude, currentPosition.latitude) > maxDistance &&
    getDiference(lastPosition.longitude, currentPosition.longitude) > maxDistance
  ) {
    return false
  }
  return true
}

const getWalkers = setWalkers => {
  const result = []
  const currentPosition = userSession.getState().lastPosition
  fbShortcuts.getCollection('Users').where('type', '==', '2').get().then(q => {
    q.forEach(documentSnapshot => {
      const row = documentSnapshot.data()
      row.image = fbShortcuts.getImage(`Users%2F${documentSnapshot.id}%2F${row.imageName}`)
      if (isNearEnought(row.lastPosition, currentPosition)) {
        result.push(
          {
            id: documentSnapshot.id,
            name: row.username,
            image: row.image,
            mobile: row.mobile,
            email: row.email
          }
        )
      }
    })
    setWalkers(result)
  })
}

const ClientWalkers = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return <WalkerCard navigation={navigation} {...item} title={item.name} rating={2.5} />
  }

  return (
    <GenericContainer>
      <CustomFlatList render={renderItem} get={getWalkers} empty="No hay conductores cerca" />
    </GenericContainer>
  )
}

export default ClientWalkers
