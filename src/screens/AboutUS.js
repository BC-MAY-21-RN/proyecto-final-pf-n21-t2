import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'

const teamMembers = [
  { id: '1', name: 'Hugo Zachariel \nAlvarez Garcia', age: 21, picture: require('../assets/images/members/1.png') },
  { id: '2', name: 'Manuel Eduardo \nRios Martinez', age: 20, picture: require('../assets/images/members/2.png') },
  { id: '3', name: 'Luis Fernando \nGomez Hinojosa', age: 33, picture: require('../assets/images/members/3.png') },
  { id: '4', name: 'Hilarion Guadalupe \nMaldonado Gonzalez', age: 21, picture: require('../assets/images/members/4.png') }

]

const Card = ({ name, picture, age }) => {
  return (
    <View style={styles.back}>
      <Image style={styles.img} source={picture}/>
      <View style={styles.texts}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>Age: {age}</Text>
      </View>
    </View>
  )
}

const AboutUS = () => {
  const renderItem = ({ item }) => {
    return <Card {...item}/>
  }

  return (
    <View>
      <FlatList
        data = {teamMembers}
        renderItem = {renderItem}
        keyExtractor = {item => item.id}
      />
    </View>
  )
}

export default AboutUS

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    marginTop: 15
  },
  back: {
    backgroundColor: '#A239EA',
    marginBottom: 20,
    borderRadius: 20,
    alignContent: 'center',
    width: 330,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    marginLeft: 40,
    marginTop: 20
  },
  img: {
    width: 80,
    height: 110
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  texts: {
    marginLeft: 15
  }
})
