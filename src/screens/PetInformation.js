import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react';

const PetInformation = ({route}) => {
  
  const {name, url} = route.params;

  return (
    <View style={styles.container}>

            <Text style={styles.title}>Pet Information</Text>

            <View style={styles.card}>
                <Image source={{uri:url}} style={styles.img}/>
            </View>


    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        display: 'flex',
        flex:1,
        justifyContent: 'space-between',
        
    },
    title:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 20
    },
    img:{
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 20,
        marginLeft: 20,
    },
    card:{
        width: 300,
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#F0D9E7',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 50,
        borderWidth: 1
    },
    petName:{
        fontSize: 20,
        color: 'black',
        
    },
})

export default PetInformation