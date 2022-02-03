import { StyleSheet } from "react-native";
import theme from "../../themes/lights";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xxl,
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  label: {
    color: theme.color.secondary2,
    fontSize: theme.font.xl,
  },
});

export default styles;
