import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react';

const PetInformation = ({route}) => {
  
  const {name, url} = route.params;

  return (
    <View style={styles.container}>

            <View style={styles.card}>
                <Image source={{uri:url}} style={styles.img}/>

                <Text style={styles.petName}>{name}</Text>
            </View>

            <View style={styles.petInfo}>
                <View style={styles.info}>
                    <Text style={styles.text}>Age: {/* VARIABLE AGE*/}</Text>
                    <Text style={styles.text}>Weight: {/* VARIABLE WEIGHT*/}</Text>
                    <Text style={styles.text}>Height: {/* VARIABLE HEIGHT*/}</Text>
                    <Text style={styles.text}>Special cares: {/* VARIABLE SPECIAL CARES*/}</Text>
                </View>
            </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        display: 'flex',
        flex:1,
        
    },
    title:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 20
    },
    img:{
        width: 120,
        height: 120,
        borderRadius: 60,
        marginRight: 20,
        marginLeft: 20,
    },
    card:{
        width: 200,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#A239EA',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 20,
        borderWidth: 2,
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    },        
    petName:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10 ,
        
    },
    petInfo: {
        backgroundColor: '#F0D9E7',
        borderWidth: 2,
        width: '80%',
        marginTop: 20,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    },
    info:{
        marginLeft: 30,
        marginTop: 20,
        marginBottom: 20,
    },
    text:{
        marginBottom: 20,
        color: 'black',
        fontSize: 20,
    },
})

export default PetInformation