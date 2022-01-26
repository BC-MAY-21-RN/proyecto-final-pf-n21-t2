import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

const ToNextSectionText = ({text, nextSection, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Pressable onPress={() => navigation.navigate(nextSection)}>
        <Text style={[styles.text, styles.hightlight]}>{nextSection}</Text>
      </Pressable>
    </View>
  );
};

export default ToNextSectionText;
