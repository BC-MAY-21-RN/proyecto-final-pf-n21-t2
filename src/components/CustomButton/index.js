import React from "react";
import { Text, Pressable, View } from "react-native";
import theme from "../../themes/lights";
import styles from "./styles";
import { ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const CustomButton = ({marginTop, style, loading, disabled, title, onPress, width, leftIconName}) => {
  const leftIcon = leftIconName ? <Icon style={[styles.icon, styles.textColor]} name={leftIconName} size={24} /> : null;
  return (
    <View style={[styles.container, style, {marginTop: marginTop}]}>
      <Pressable style={[{width: width}, styles.button, disabled ? styles.disabled : null]} onPress={onPress}>
        {leftIcon}
        {loading ? <ActivityIndicator size="small" color={theme.color.secondary1} /> : <Text style={[styles.text, styles.textColor]}>{title}</Text>}
      </Pressable>
    </View>
  );
};

export default CustomButton;