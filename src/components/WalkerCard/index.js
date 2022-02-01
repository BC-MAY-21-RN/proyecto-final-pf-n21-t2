import React from "react";
import { View, Pressable, Image, Text } from "react-native";
import { AirbnbRating } from 'react-native-ratings';
import styles from "./styles";

const toHireWalkerSection = (navigation, data) => {
  console.log('open new section and send props');
};

const WalkerCard = ({title, rating, navigation}) => {
  const data = {title, rating};

  return (
    <Pressable style={styles.container} onPress={() => toHireWalkerSection(navigation, data)}>
      <View>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/image_loading.gif')}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <AirbnbRating
            isDisabled={true}
            count={5}
            showRating={false}
            defaultRating={rating}
            size={30}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default WalkerCard;
