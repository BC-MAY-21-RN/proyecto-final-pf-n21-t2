import React from "react";
import { Image } from "react-native";
import styles from "./styles";

const RoundImage = ({source}) => {
  return (
    <Image
      style={styles.tinyLogo}
      source={source}
    />
  );
};

export default RoundImage;
