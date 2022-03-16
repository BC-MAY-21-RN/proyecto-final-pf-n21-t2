import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import PetCard from '../components/PetCard'
import fbShortcuts from '../assets/controllers/firebaseShortcuts'
import { userSession } from '../store/reducers/userSession'
import CustomFlatList from '../components/CustomFlatList'
import GenericContainer from '../containers/GenericContainer'

const Card = ({ name, url, onPress }) => {
  const petCardStyle = { imgStyle: styles.img, txtStyle: styles.petAdded }
  return (
    <View style={styles.fatherContainer}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
          <PetCard url={url} {...petCardStyle} name={name} row />
      </TouchableOpacity>
    </View>
  )
}

const getPets = setPets => {
  fbShortcuts.getCollection('Pets').where('useruid', '==', userSession.getState().id).get()
    .then((querySnapshot) => {
      const newPets = []
      querySnapshot.forEach((snapshot) => {
        const row = snapshot.data()
        row.id = snapshot.ref._documentPath._parts[1]
        row.image = fbShortcuts.getImage(`Pets%2F${row.id}%2F${row.imageName}`)
        newPets.push(row)
      })
      setPets(newPets)
    })
}

const Pets = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
    <Card {...item} url={item.image} onPress={() => { navigation.navigate('PetInformation', { ...item }) }}/>
    )
  }

  const handlePet = (onPress) => {
    navigation.navigate('AddPet')
  }

  const buttonStyle = {
    width: 150,
    marginBottom: 50,
    marginTop: 10
  }

  return (
    <GenericContainer style={styles.container}>
      <CustomFlatList render={renderItem} get={getPets} empty="No pets registred" />
       <CustomButton leftIconName='add-outline' title="Pet" {...buttonStyle}
        onPress={() => { handlePet('addPet') } }/>
    </GenericContainer>
  )
}

const styles = StyleSheet.create({
  fatherContainer: {
    width: 335,
    paddingHorizontal: 20
  },
  container: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 20,
    marginBottom: 20
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 20,
    marginLeft: 10
  },
  card: {
    width: 300,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F0D9E7',
    borderColor: 'white',
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 14
  },
  petAdded: {
    fontSize: 20,
    color: 'black'
  },
  lista: {
    paddingTop: 10,
    paddingBottom: 20
  }
})

export default Pets
