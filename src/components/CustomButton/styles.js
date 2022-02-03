import { StyleSheet } from "react-native"
import theme from "../../themes/lights";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  button: {
    backgroundColor: theme.color.primary2,
    borderRadius: 100,
    overflow: 'hidden',
    padding: theme.spacing.xl,
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 14,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textColor: {
    color: theme.color.secondary1,
  },
  text: {
    fontSize: theme.font.xl,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  disabled: {
    opacity: .5,
  },
  icon: {
    fontSize: theme.font.xxl,
    marginRight: theme.spacing.xl,
  },
});

export default styles;