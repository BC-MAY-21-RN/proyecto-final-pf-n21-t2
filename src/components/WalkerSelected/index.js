import React from "react";
import UserPresentation from "../UserPresentation";
import { View, Text } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import styles from "./styles";

const WalkerSelected = ({rating, name, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.label}>The walker will be</Text>
        <AirbnbRating
          isDisabled={true}
          count={5}
          showRating={false}
          defaultRating={rating}
          size={30}
        />
      </View>
      <UserPresentation name={name} image={image} />
    </View>
  );
};

export default WalkerSelected
