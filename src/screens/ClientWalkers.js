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

const getReviews = (id) => {
  const result = []
  let suma = 0
  return new Promise((resolve) => {
    fbShortcuts.getCollection('Reviews').where('walkeruid', '==', id).get()
      .then(q => {
        let bool = false
        q.forEach(documentSnapshot => {
          bool = true
          const row = documentSnapshot.data()
          result.push(row)
        })
        if (bool === false) {
          resolve(0)
        }
        result.forEach((rate) => {
          suma += rate.ratings
        })
        resolve(suma / result.length)
      })
  })

  // return (result.length === 0) ? 0 : (suma / result.length)
}

const getWalkers = (setWalkers) => {
  const promises = []
  const result = []
  const currentPosition = userSession.getState().lastPosition
  fbShortcuts.getCollection('Users').where('type', '==', '2').get().then(q => {
    q.forEach(documentSnapshot => {
      const row = documentSnapshot.data()
      const rate = getReviews(row.useruid)
      promises.push(rate)
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
        Promise.all(promises).then((resolve) => {
          for (let i = 0; i < result.length; i++) {
            result[i].ratings = resolve[i]
          }
          console.log(resolve)
          console.log(result)
          setWalkers(result)
        })
      }
    })
  })
}

const ClientWalkers = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return <WalkerCard navigation={navigation} {...item} title={item.name} rating={item.ratings} />
  }

  return (
    <GenericContainer>
      <CustomFlatList render={renderItem} get={getWalkers} empty="No hay conductores cerca" />
    </GenericContainer>
  )
}

export default ClientWalkers
