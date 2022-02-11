import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import CustomButton from '../components/CustomButton';
import theme from '../themes/lights';

const DATA = [
    { 
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Firulais',
      url: 'https://i.pinimg.com/236x/1d/84/36/1d8436ad0603bea560b177712df7acea.jpg'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Solovino',
      url: 'https://i.pinimg.com/originals/f2/d9/ce/f2d9ce225a004889f403d7008fb59321.jpg'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Cheems',
      url: 'https://holatelcel.com/wp-content/uploads/2020/09/cheems-memes-9.jpg'
    },
  ];

const Card = ({ name, url, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={{uri: url}} style={styles.img}/>
        <Text style={styles.petName}>{name}</Text>
    </TouchableOpacity>
  );

const Pets = ({navigation}) => {

    const renderItem = ({item}) => (
        <Card {...item} onPress={()=>{navigation.navigate('PetInformation', {...item})}}/>  
      );

    const handlePet = (onPress) => {
        navigation.navigate('AddPet')
      }

    const buttonStyle = {
        width: 150, 
        style: {
            marginBottom: 50,
        }
    };  
      return (
        <View style={styles.container}>

            <Text style={styles.title}>Pets</Text>

            <FlatList 
                data={DATA}
                renderItem={renderItem}
                key={item=> item.id}
            />
            <CustomButton leftIconName='add-outline' title="Pet"  {...buttonStyle}
                onPress={()=>{handlePet('addPet')}}
            /> 
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
        marginTop: 20,
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

export default Pets
