import React from "react";
import { View } from "react-native";
import EnfasisText from "../EnfasisText";
import RoundImage from "../RoundImage";
import { AirbnbRating } from "react-native-ratings";
import styles from "./styles";

const UserPresentation = ({rating}) => {
  return (
    <View>
      <RoundImage source={require('../../assets/images/image_loading.gif')} />
      <EnfasisText text="Tizoc Chavez" />
      {rating ? <AirbnbRating
        isDisabled={true}
        count={5}
        showRating={false}
        defaultRating={rating}
        size={30}
      /> : null}
    </View>
  );
};

export default UserPresentation;
