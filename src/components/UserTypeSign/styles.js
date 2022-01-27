import { StyleSheet } from "react-native";
import theme from "../../themes/lights";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.primary4,
    marginHorizontal: theme.spacing.xxxl,
    borderRadius: 50,
    padding: theme.spacing.xxxl,
    justifyContent: 'center',
    flex: 5,
    marginBottom: theme.spacing.xxl,
  },
  button: {
    marginBottom: theme.spacing.xxxl,
  },
  header: {
    marginBottom: theme.spacing.xxxl,
    color: theme.color.secondary2,
    textAlign: 'center',
    fontSize: theme.font.m,
    fontWeight: 'bold',
  },
});

export default styles;
