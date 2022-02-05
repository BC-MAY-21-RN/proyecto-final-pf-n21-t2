import { StyleSheet } from "react-native"
import theme from "../../themes/lights";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  iconContainer: {
    marginRight: theme.spacing.xl,
    marginLeft: theme.spacing.xxl,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
    
  },
  text: {
    fontSize: theme.font.xl,
    color: theme.color.secondary1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  disabled: {
    opacity: .5,
  },
});

export default styles;