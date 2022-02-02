import {StyleSheet} from 'react-native';
import theme from '../../themes/lights';

const styles = StyleSheet.create({
  CardBox: {
    left: 15, 
    borderColor: theme.color.primary1,
    height: 100,
    width: 360,
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: "row",
  },
  Img: {
    borderRadius: 100,
    backgroundColor: "black",
    width: 85,
    height: 85,
    top: 5,
    left: 5,
  },
  Data: {
    flexDirection: "column",
  },
  Tittle: {
    color: "lightgrey"
  },
  Owner: {
    fontWeight: "bold",
  }


  
})

export default styles;