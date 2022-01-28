import React from "react";
import { View } from "react-native";
import CustomButton from "../CustomButton";
import { CustomInput, InputValidation } from "../CustomInput";
import ButtonSign from "../ButtonSign";

const GenericSign = ({children, title, loading, form, setForm, onPress}) => {
  return (
    <View>
      <CustomInput title="Email" state={{name: 'email', form, setForm}} validation={InputValidation.email} />
      <CustomInput type="password" title="Password" state={{name: 'password', form, setForm}} validation={InputValidation.password} />
      {children}
      <ButtonSign loading={loading} disabled={form.disabled} title={title} onPress={() => {
        if (!form.disabled) {
          onPress();
        }
      }} />
    </View>
  );
};

export default GenericSign;
