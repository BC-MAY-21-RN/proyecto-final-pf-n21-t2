import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const WalkerDetailsClient = () => {
  return (
    <View>
      <Text>detail's client Screen</Text>
      <Image styles={styles.test}
        source={{
          uri: 'https://i.ytimg.com/vi/XfRPlBP7f2E/maxresdefault.jpg',
        }}
      />
    </View>
  );
};

export default WalkerDetailsClient;

const styles = StyleSheet.create({
  test: {
    width: 300,
    height: 300
  }
});
