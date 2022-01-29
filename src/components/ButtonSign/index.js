import React from "react";
import CustomButton from "../CustomButton";
import styles from "./styles";

const ButtonSign = ({title, onPress, disabled, loading}) => {
  return (
    <CustomButton width={200} style={styles.button} disabled={disabled} loading={loading} title={title} onPress={onPress} />
  );
};

export default ButtonSign;
