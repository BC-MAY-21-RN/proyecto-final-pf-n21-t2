import { FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import UserPresentation from '../components/UserPresentation';
import { Rating } from 'react-native-ratings';

const DATA = [
  {id:"1", imgW: require('../assets/images/image_loading.gif'),name: "Tizoc Chavez", rating: 3,desc: "Great Job!"},
  {id:"2", imgW: require('../assets/images/image_loading.gif'),name: "Marcela", rating: 1,desc: "He lost my dog!"},
  {id:"3", imgW: require('../assets/images/image_loading.gif'),name: "Keanu Reeves", rating: 4,desc: "Nice Blow"},
  {id:"4", imgW: require('../assets/images/image_loading.gif'),name: "Po", rating: 1,desc: "My dog arrived hurt "},
  {id:"5", imgW: require('../assets/images/image_loading.gif'),name: "Carolina", rating: 5,desc: "My dog is very Happy :D!!"},
  
]
const ListReviews = ({imgW, name, rating, desc})=>{
    //Nombre foto Estrellas texto
    return (
        <View style={styles.containerCard}>

            <Image source={imgW} style={styles.img}/>

            <View style={styles.contarinerInfo}>
              <View style={styles.texts}>
                  <Text>{name}</Text>
                  <Text>{rating}</Text>
              </View>
              <Text>{desc}</Text>
            </View>
        </View>
    )
}

const Reviews = () => {

    const renderItem = ({item})=>{
        return <ListReviews {...item}/>
    }

    return (
      
    <View style={styles.container}>

        <UserPresentation rating="4" name ="Manu" image={require('../assets/images/image_loading.gif')} />

        <FlatList 
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            style={styles.listContainer}
        />

    </View>
    )
}

const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
    },
    listContainer:{
        marginTop: 20,
    },
    containerCard:{
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        borderTopColor: "black",
        borderTopWidth: 1,
        width: 300,
        flexDirection: 'row',
        padding: 15
    },
    img:{
        width: 70,
        height: 70
    },
    texts:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    contarinerInfo:{
      flexDirection: 'column',
      backgroundColor: 'red',
      marginLeft: 20,
      width: 170
    },
})


export default Reviews
