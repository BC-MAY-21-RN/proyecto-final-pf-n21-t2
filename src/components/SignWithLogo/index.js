import React from "react";
import { View } from "react-native";
import ImageLogo from "../ImageLogo";
import ToNextSectionText from "../ToNextSectionText";

const SignWithLogo = ({navigation, imageFlex, children, footer}) => {
  return (
    <View style={{flex: 1}}>
      <ImageLogo flex={3} />  
      {children}
      <ToNextSectionText navigation={navigation} text={footer.text} nextSection={{label: footer.label, section: footer.section}} />
    </View>
  );
};

export default SignWithLogo;
