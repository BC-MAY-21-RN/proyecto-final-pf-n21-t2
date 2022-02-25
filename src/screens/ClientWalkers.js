import React from 'react'
import WalkerCard from '../components/WalkerCard'
import GenericContainer from '../containers/GenericContainer'
import CustomFlatList from '../components/CustomFlatList'
import fbShortcuts from '../assets/controllers/firebaseShortcuts'
import { userSession } from '../store/reducers/userSession'

const getDiference = (val1, val2) => {
  return Math.abs(Math.abs(val1) - Math.abs(val2))
}

const isNearEnought = lastPosition => {
  const oneMinute = 1000 * 60
  const currentPosition = userSession.getState().lastPosition
  const maxDistance = 0.01
  if ((new Date().getTime() - lastPosition.timestamp) > oneMinute &&
    getDiference(lastPosition.latitude, currentPosition.latitude) > maxDistance &&
    getDiference(lastPosition.longitude, currentPosition.longitude) > maxDistance
  ) {
    return false
  }
  return true
}

const getWalkers = setWalkers => {
  const result = []
  fbShortcuts.getCollection('Users').where('type', '==', '2').get().then(q => {
    q.forEach(documentSnapshot => {
      const row = documentSnapshot.data()
      row.id = documentSnapshot.ref._documentPath._parts[1]
      row.image = fbShortcuts.getImage(`Users%2F${row.id}%2F${row.imageName}`)
      if (isNearEnought(row.lastPosition)) {
        result.push(
          {
            id: documentSnapshot.id,
            name: row.username,
            image: row.image
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
