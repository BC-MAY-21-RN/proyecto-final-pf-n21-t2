import React from "react";
import { Text, Pressable, View } from "react-native";
import theme from "../../themes/lights";
import styles from "./styles";

const CustomButton = ({title, onPress, width}) => {
  return (
    <View style={styles.container}>
      <Pressable style={[{width: width}, styles.button]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;