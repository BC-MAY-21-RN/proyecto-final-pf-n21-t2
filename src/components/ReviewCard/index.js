import React from "react";
import { View, Text } from "react-native";
import RoundImage from "../RoundImage";
import { AirbnbRating } from "react-native-ratings";
import LineSeparator from "../LineSeparator";
import styles from "./styles";

const ReviewCard = ({image, name, review, rating}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <RoundImage size={40} source={image} name={name} review={review} rating={rating} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <AirbnbRating
            isDisabled={true}
            count={5}
            showRating={false}
            defaultRating={rating}
            size={20}
          />
        </View>
      </View>
      <View>
        <Text style={{marginLeft: 55}}>{review}</Text>
      </View>
      <LineSeparator />
    </View>
  );
};

export default ReviewCard;
