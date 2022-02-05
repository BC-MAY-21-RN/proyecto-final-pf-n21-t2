import React from "react";
import { Text, Pressable, View } from "react-native";
import theme from "../../themes/lights";
import styles from "./styles";
import { ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const CustomButton = ({leftIconName, style, loading, disabled, title, onPress, width}) => {
  let leftIcon = <View style={styles.iconContainer}>
    <Icon name={leftIconName} color={theme.color.secondary1} size={30} />
  </View>;
  let leftIconStyle = leftIconName ? {justifyContent: 'flex-start'} : null;
  return (
    <View style={[styles.container, style]}>
      <Pressable style={[{width: width}, styles.button, disabled ? styles.disabled : null, leftIconStyle]} onPress={onPress}>
        {leftIconName ? leftIcon : null}
        {loading ? <ActivityIndicator size="small" color={theme.color.secondary1} /> : <Text style={styles.text}>{title}</Text>}
      </Pressable>
    </View>
  );
};

export default CustomButton;