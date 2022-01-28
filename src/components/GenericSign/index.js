import React from "react";
import { View } from "react-native";
import CustomButton from "../CustomButton";
import { CustomInput, InputValidation } from "../CustomInput";
import styles from "./styles";

const GenericSign = ({children, title, loading, form, setForm, onPress}) => {
  return (
    <View>
      <CustomInput title="Email" state={{name: 'email', form, setForm}} validation={InputValidation.email} />
      <CustomInput type="password" title="Password" state={{name: 'password', form, setForm}} validation={InputValidation.password} />
      {children}
      <CustomButton style={styles.button} loading={loading} disabled={form.disabled} width={150} title={title} onPress={() => {
        if (!form.disabled) {
          onPress();
        }
      }} />
    </View>
  );
};

export default GenericSign;
