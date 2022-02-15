import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import theme from '../themes/lights';


const WalkerDetailsClient = ({route}) => {

  const {Name, Duration, Start, ImageUri} = route.params;

  const buttonStyle = {width: 300, marginBottom: theme.spacing.xxxl};

  return (
    <View style={styles.container}>
      <View style={styles.owner}>
        <Image style={styles.image}
          source={{
            uri: ImageUri,
          }}

        />
        <View style={styles.info}>
          <Text style={styles.info1}>Dueño</Text>
          <Text style={styles.info2}>{Name}</Text>
          <Text style={styles.info3}>Paseo de {Duration} minutos</Text>
          <Text style={styles.info3}>Comienza en {Start} minutos</Text>
        </View>
      </View>
      <View style={styles.dogData}>
        {/* Datos del Perro */}
      </View>
      <View style={styles.buttons}>
        <CustomButton {...buttonStyle} title='Aceptar' />
        <CustomButton  {...buttonStyle}title='Cancelar' />
      </View>
    </View>
  );
};

export default WalkerDetailsClient;
                                              
const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  owner:{
    flexDirection: 'row',
    marginTop: 30,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginRight: 20
  },
  info:{
    marginBottom: 30,
  },
  info1:{
    fontSize: 17,
    color: 'gray'
  },
  info2:{
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  info3:{
    color: 'black',
    
  },
  dogData:{
    width: 300,
    height: 200,
    borderWidth: 5,
    borderRadius: 40,
    borderColor: '#A239EA',
    marginBottom: 30
  },
  buttons:{

  }
});