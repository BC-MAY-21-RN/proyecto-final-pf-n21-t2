import React from "react";
import { View } from "react-native";
import EnfasisText from "../EnfasisText";
import RoundImage from "../RoundImage";
import { AirbnbRating } from "react-native-ratings";

const UserPresentation = ({rating, name, image}) => {
  return (
    <View>
      <RoundImage source={image} />
      <EnfasisText text={name} />
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