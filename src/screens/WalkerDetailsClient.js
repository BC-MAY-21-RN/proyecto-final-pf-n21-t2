import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import CustomButton from '../components/CustomButton'
import GenericContainer from '../containers/GenericContainer'
import fbShortcuts from '../assets/controllers/firebaseShortcuts'
import theme from '../themes/lights'

const updateService = (setLoading, newValue, walkingId, navigation) => {
  setLoading(true)
  fbShortcuts.updateDoc('Walkings', walkingId, {
    isPayed: newValue
  }, () => {
    setLoading(false)
    navigation.goBack()
  })
}

const WalkerDetailsClient = ({ route, navigation }) => {
  const [aceptLoading, setAceptLoading] = useState(false)
  const [denyLoading, setDenyLoading] = useState(false)
  const { Name, Duration, Start, ImageUri } = route.params
  const buttonStyle = { width: 200, marginBottom: theme.spacing.xxxl }
  const updateServiceParams = [route.params.id, navigation]

  const aceptService = () => {
    updateService(setAceptLoading, '1', ...updateServiceParams)
  }
  const denyService = () => {
    updateService(setDenyLoading, '2', ...updateServiceParams)
  }

  const renderItem = ({ item }) => (
    <View key={item.petId} style={styles.petContainer}>
      <Image source={{ uri: item.image }} style={styles.petImage} height={styles.petImage.height} width={styles.petImage.width} />
      <View style={styles.column}>
        <View style={styles.petRowDetails}>
          <Text style={styles.petName}>{item.name}</Text>
          <View>
            <Text style={styles.petSecondary}>Special cares</Text>
            <Text>{item.specialCares}</Text>
          </View>
        </View>
        <View style={styles.petRowDetails}>
          <View style={styles.row}>
            <Text style={styles.petSecondary}>Age: </Text>
            <Text>{item.age}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.petSecondary}>Height: </Text>
            <Text>{item.height}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.petSecondary}>Weight: </Text>
            <Text>{item.weight}</Text>
          </View>
        </View>
      </View>
    </View>
  )

  return (
    <GenericContainer style={styles.container}>
      <View style={styles.owner}>
        <Image style={styles.image}
          source={{
            uri: ImageUri
          }}
        />
        <View style={styles.info}>
          <Text style={styles.info1}>Owner</Text>
          <Text style={styles.info2}>{Name}</Text>
          <Text style={styles.info3}>Duration of {Duration}</Text>
          <Text style={styles.info3}>Starts in {Start}</Text>
        </View>
      </View>
      <Text style={styles.petsLabel}>Pets</Text>
      <View style={styles.dogData}>
        <FlatList
          data={route.params.pets}
          renderItem={renderItem}
          keyExtractor={(item) => item.petId}
        />
      </View>
      <View style={styles.buttons}>
        <CustomButton loading={aceptLoading} {...buttonStyle} title='Aceptar' onPress={aceptService} />
        <CustomButton loading={denyLoading} {...buttonStyle} title='Cancelar' onPress={denyService} />
      </View>
    </GenericContainer>
  )
}

export default WalkerDetailsClient

const styles = StyleSheet.create({
  petContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing.m
  },
  petRowDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  petSecondary: {
    fontWeight: '600'
  },
  petsLabel: {
    color: theme.color.secondary2,
    fontSize: theme.font.xl
  },
  column: {
    display: 'flex',
    flex: 1,
    marginLeft: theme.spacing.m
  },
  petName: {
    color: theme.color.secondary2
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  container: {
    alignItems: 'center'
  },
  owner: {
    flexDirection: 'row',
    marginTop: 30
  },
  petImage: {
    height: 50,
    borderRadius: 100,
    width: 50
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginRight: 20
  },
  info: {
    marginBottom: 30
  },
  info1: {
    fontSize: 17,
    color: 'gray'
  },
  info2: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  info3: {
    color: 'black'
  },
  dogData: {
    width: '90%',
    height: 200,
    borderWidth: 5,
    borderRadius: 40,
    overflow: 'hidden',
    borderColor: '#A239EA',
    marginBottom: 30
  },
  buttons: {

  }
})
