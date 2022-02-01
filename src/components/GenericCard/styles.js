import {StyleSheet} from 'react-native';
import theme from '../../themes/lights';

const styles = StyleSheet.create({
  CardBox: {
    borderColor: theme.color.primary1,
    height: 100,
    width: 350,
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: "row",
  },
  Img: {
    flex: 0.3,
    borderRadius: 50,
    backgroundColor: "Black",
    width: 30,
    height: 30,
  },
  Data: {
    flex: 1,
    flexDirection: "column",
  }


  
})

export default styles;