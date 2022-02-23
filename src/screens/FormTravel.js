import { Text, View, Image, StyleSheet } from 'react-native'
import React from 'react'
import CustomRatings from '../components/CustomRatings'
import CustomButton from '../components/CustomButton'
import CustomDatePicker from '../components/CustomDatePicker'

const FormTravel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.align}>

        <Text style={styles.info}>The walker will be: </Text>

        <Image source={{ uri: 'https://i.ytimg.com/vi/Q0P8ig5STAY/maxresdefault.jpg' }} style={styles.img}/>
        <Text style={styles.instructions}>Tizoc Chavez</Text>

        <CustomRatings rating={3} size={25}/>

        <View style={styles.buttons}>
          <Text style={styles.instructions}>Please customize the start and the end time of the ride: </Text>
          <CustomDatePicker title={'Start date time'} styl={{ marginBottom: 10 }}/>
          <CustomDatePicker title={'End date time'} width={160}/>
        </View>
      </View>

      <CustomButton title='Save' width={200} onPress={() => alert('XD')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  align: {
    alignItems: 'center'
  },
  info: {
    fontSize: 30,
    color: 'black',
    marginTop: 10
  },
  instructions: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
    width: 300,
    textAlign: 'center'
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginTop: 10,
    marginBottom: 10
  },
  buttons: {
    marginTop: 10
  }
})

export default FormTravel
