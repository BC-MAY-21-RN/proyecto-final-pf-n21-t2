import React from 'react'
import CardGeneric from '../components/GenericCard'
import CustomFlatList from '../components/CustomFlatList'
import GenericContainer from '../containers/GenericContainer'
import fbShortcuts from '../assets/controllers/firebaseShortcuts'
import { userSession } from '../store/reducers/userSession'

const getClients = setClients => {
  const walkerId = userSession.getState().id
  fbShortcuts.getCollection('Walkings').where('walkerId', '==', walkerId).get()
    .then(async (querySnapshot) => {
      const walkings = []
      await new Promise(resolve => {
        const getClients = []
        querySnapshot.forEach(async (snapshot) => {
          const row = snapshot.data()
          row.id = snapshot.id
          const user = fbShortcuts.getCollection('Users').where('useruid', '==', row.clientId).get()
          getClients.push(user)
          walkings.push(row)
        })
        Promise.all(getClients).then(data => {resolve(data)})
      }).then(data => {
        data.forEach((client, index) => {
          client.forEach(clientData => {
            const clientRow = clientData.data()
            walkings[index].image = fbShortcuts.getImage(`Users%2F${clientRow.useruid}%2F${clientRow.imageName}`)
            walkings[index].username = clientRow.username
          })
        })
        setClients(walkings)
      })
    })
}

const HomeWalker = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <CardGeneric
      navigation={navigation}
      Name={item.username}
      Duration={item.duration}
      Start={item.start}
      ImageUri={item.image}
      startDatetime={item.startDatetime}
      endDatetime={item.endDatetime}
      />
  )

  return (
    <GenericContainer>
      <CustomFlatList render={renderItem} get={getClients} empty="No pending services" />
    </GenericContainer>
  )
}

export default HomeWalker
