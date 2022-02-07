import { StyleSheet } from "react-native";
import theme from "../../themes/lights";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingBottom: theme.spacing.xl,
  },
  name: {
    color: theme.color.secondary2,
    fontSize: theme.font.m,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default styles;
