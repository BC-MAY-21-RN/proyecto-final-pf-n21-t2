import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import CustomButton from '../components/CustomButton';
import PetCard from '../components/PetCard';
import theme from '../themes/lights';

const DATA = [
    { 
      id: '1',
      name: 'Firulais',
      age: 4,
      weight: '20kg',
      height: '40cm',
      specialCares: 'Cuetes scare it',
      url: 'https://i.pinimg.com/236x/1d/84/36/1d8436ad0603bea560b177712df7acea.jpg',
      
    },
    {
      id: '2',
      name: 'PugBerto',
      age: 6,
      weight: '30kg',
      height: '50cm',
      specialCares: "Can't run fast for long",
      url: 'https://i.pinimg.com/originals/f2/d9/ce/f2d9ce225a004889f403d7008fb59321.jpg'
    },
    {
      id: '3',
      name: 'Cheems',
      age: 21,
      weight: '40kg',
      height: '60cm',
      specialCares: 'He got fatigate too fast',
      url: 'https://holatelcel.com/wp-content/uploads/2020/09/cheems-memes-9.jpg'
    },
    {
      id: '4',
      name: 'Tristón',
      age: 1,
      weight: '3kg',
      height: '20cm',
      specialCares: 'It needs to be played with so that he is not sad',
      url: 'https://www.soy502.com/sites/default/files/styles/mobile_full_node/public/2022/Feb/05/meme_perrito_cuando_no_quieres_dar_explicaciones_soy502_guatemala.jpg'
    },
    {
      id: '5',
      name: 'El perrón',
      age: 10,
      weight: '80kg',
      height: '3mts',
      specialCares: 'Territorial Dog',
      url: 'https://www.eluniversal.com.mx/sites/default/files/2020/06/02/mejores-memes-cheems-perrito-muestra-antes-ahora_.jpg'
    },
    {
      id: '6',
      name: 'Doge',
      age: 7,
      weight: '40kg',
      height: '70cm',
      specialCares: 'Eats a lot',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_09WzEY88Nag4w3KX2DZKWYlUxXCqIM0l1w6O4c8KoKulsfXcD2pjfQXhQi3JIqzys0w&usqp=CAU'
    },

  ];

const Card = ({ name, url, onPress }) => {
    const petCardStyle = {imgStyle: styles.img, txtStyle: styles.petAdded};
    return (<TouchableOpacity style={styles.card} onPress={onPress}>
        <PetCard url={url} {...petCardStyle} name={name} />
    </TouchableOpacity>);
  };

const Pets = ({navigation}) => {
    const renderItem = ({item}) => (
        <Card {...item} onPress={()=>{navigation.navigate('PetInformation', {...item})}}/>  
      );

    const handlePet = (onPress) => {
        navigation.navigate('AddPet')
      }

    const buttonStyle = {
        width: 150, 
        marginBottom: 50,
        marginTop: 10
        
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
    petAdded:{
        fontSize: 20,
        color: 'black',
        
    },
    lista:{
      paddingTop: 10,
      paddingBottom: 10,
    }
})

export default Pets
