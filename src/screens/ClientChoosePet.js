import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { userSession } from '../store/reducers/userSession'
import GenericContainer from '../containers/GenericContainer'
import fbShortcuts from '../assets/controllers/firebaseShortcuts'
import theme from '../themes/lights'
import CustomButton from '../components/CustomButton'
import LoadingSpinner from '../components/LoadingSpinner'
import useSubmit from '../hooks/useSubmit'

const getPets = (setPets, setSelectedPets) => {
  fbShortcuts.getCollection('Pets').where('useruid', '==', userSession.getState().id).get()
    .then((querySnapshot) => {
      const newPets = []
      const selectedPets = []
      querySnapshot.forEach((snapshot) => {
        selectedPets.push(true)
        const row = snapshot.data()
        row.id = snapshot.id
        row.image = fbShortcuts.getImage(`Pets%2F${row.id}%2F${row.imageName}`)
        newPets.push(row)
      })
      setPets(newPets)
      setSelectedPets(selectedPets)
    })
}

const styles = {
  petRow: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: theme.color.secondary2
  },
  petName: {
    fontSize: theme.font.xl,
    marginLeft: theme.spacing.xl
  },
  petsContainer: {
    marginBottom: theme.spacing.xl
  }
}

const signupWalking = (walking, submit, navigation) => {
  submit.setLoading(true)
  fbShortcuts.add('Walkings', null, walking, () => {
    submit.setLoading(false)
    navigation.reset({
      index: 0,
      routes: [{ name: 'Client', params: { useruid: userSession.getState().id } }]
    })
  })
}

const ClientChoosePet = ({ navigation, route }) => {
  const [selectedPets, setSelectedPets] = useState([])
  const [pets, setPets] = useState(null)
  const submit = useSubmit()

  useEffect(() => {
    if (!pets) {
      getPets(setPets, setSelectedPets)
    }
  }, [])
  useEffect(() => {
    const isAnySelected = selectedPets.filter(pet => pet).length > 0
    if (!isAnySelected) {
      submit.setOk(false)
    } else {
      submit.setOk(true)
    }
  }, [selectedPets])

  const handleSubmit = () => {
    const { endDatetime, startDatetime } = route.params
    const petsData = []
    for (const pet in pets) {
      const petRow = {
        image: pets[pet].image,
        name: pets[pet].name,
        petId: pets[pet].id
      }
      petsData.push(petRow)
    }
    const walking = {
      clientId: userSession.getState().id,
      walkerId: route.params.walkerId,
      pets: petsData,
      endDatetime,
      startDatetime,
      isPayed: '0'
    }
    signupWalking(walking, submit, navigation)
  }

  return (
    <GenericContainer>
      <View style={styles.petsContainer}>
        {pets?.map((pet, index) => {
          return (
            <View style={styles.petRow} key={pet.id}>
              <CheckBox
                disabled={false}
                value={selectedPets[index]}
                onValueChange={(newValue) => {
                  const newArr = JSON.parse(JSON.stringify(selectedPets))
                  newArr[index] = newValue
                  setSelectedPets(newArr)
                }}
              />
              <Text style={styles.petName}>{pet.name}</Text>
            </View>
          )
        })}
      </View>
      {pets
        ? (
        <CustomButton title="Take My Dog" {...submit} onPress={handleSubmit} />
          )
        : <LoadingSpinner size="huge" scale={2} />}
    </GenericContainer>
  )
}

export default ClientChoosePet
