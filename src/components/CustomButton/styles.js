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
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
    
  },
  text: {
    fontSize: theme.font.xl,
    color: theme.color.secondary1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;