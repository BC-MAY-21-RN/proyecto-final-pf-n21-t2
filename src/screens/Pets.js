import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import CustomButton from '../components/CustomButton';
import PetCard from '../components/PetCard';
import theme from '../themes/lights';

const DATA = [
    { 
      id: '1',
      name: 'Firulais',
      url: 'https://i.pinimg.com/236x/1d/84/36/1d8436ad0603bea560b177712df7acea.jpg'
    },
    {
      id: '2',
      name: 'PugBerto',
      url: 'https://i.pinimg.com/originals/f2/d9/ce/f2d9ce225a004889f403d7008fb59321.jpg'
    },
    {
      id: '3',
      name: 'Cheems',
      url: 'https://holatelcel.com/wp-content/uploads/2020/09/cheems-memes-9.jpg'
    },
    {
      id: '4',
      name: 'La perrona',
      url: 'https://i.redd.it/1d4gcp5esrk41.jpg'
    },
    {
      id: '5',
      name: 'El perron',
      url: 'https://www.eluniversal.com.mx/sites/default/files/2020/06/02/mejores-memes-cheems-perrito-muestra-antes-ahora_.jpg'
    },

  ];

const Card = ({ name, url, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <PetCard uri={url} imgStyle={styles.img} txtStyle={styles.petName} name={name} />
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

            <FlatList 
                data={DATA}
                renderItem={renderItem}
                key={item=> item.id}
                style={styles.lista}
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
    lista:{
      paddingTop: 10,
      paddingBottom: 10,
    }
})

export default Pets
