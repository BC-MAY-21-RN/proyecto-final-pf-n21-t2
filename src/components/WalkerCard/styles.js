import { StyleSheet } from "react-native";
import theme from "../../themes/lights";

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: theme.color.primary2,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing.m,
    marginBottom: theme.spacing.xl,
  },
  title: {
    color: theme.color.secondary2,
    fontSize: theme.font.xxl,
  },
  rightContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default styles;
