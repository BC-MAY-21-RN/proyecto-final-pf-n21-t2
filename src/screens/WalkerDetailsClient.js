import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import CustomImage from '../components/CustomImage';

const WalkerDetailsClient = () => {

  const testdata = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFrCAT0yddSLR1q64m5s2bLUkMgFUaFamivJ5E3pUVWX_AY6fOgfJHyDP9haXSHB5WgjE&usqp=CAU';
  return (
    <View>
      <Text>detail's client Screen</Text>
        <CustomImage ImageUri={testdata}/>
    </View>
  );
};

export default WalkerDetailsClient;

const styles = StyleSheet.create({
  test: {
    width: 200,
    height: 200
  }
});
