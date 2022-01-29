import { StyleSheet } from "react-native";
import theme from "../../themes/lights";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: theme.color.secondary2,
    fontSize: theme.font.m,
  }
});

export default styles;