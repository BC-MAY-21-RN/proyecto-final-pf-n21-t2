import React from "react";
import { Text, Pressable, View } from "react-native";
import theme from "../../themes/lights";
import styles from "./styles";
import { ActivityIndicator } from "react-native";

const CustomButton = ({style, loading, disabled, title, onPress, width}) => {
  console.log(disabled);
  return (
    <View style={[styles.container, style]}>
      <Pressable style={[{width: width}, styles.button, disabled ? styles.disabled : null]} onPress={onPress}>
        {loading ? <ActivityIndicator size="small" color={theme.color.secondary1} /> : <Text style={styles.text}>{title}</Text>}
      </Pressable>
    </View>
  );
};

export default CustomButton;