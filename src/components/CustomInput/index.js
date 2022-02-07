import React, {useRef} from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

export const InputState = (form, setForm) => {
  return name => {
    return ({name, form, setForm});
  };
};

export const InputValidation = {
  email: {
    required: true,
    min: 5,
    max: 25,
    not: true,
    regex:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  },
  password: {
    required: true,
    min: 6,
    max: 50,
  },
  digit15: {
    required: true,
    min: 15,
    max: 15,
  },
  adress: {
    required: true,
    min: 10,
    max: 50,
  },
  phone: {
    required: true,
    min: 10,
    max: 15,
  },
  containerNumber: {
    required: true,
    min: 11,
    max: 11,
  },
  string: {
    required: true,
    min: 5,
    max: 50,
  },
};

const LOG = {
  error: {
    empty: 'Empty field',
    min: 'Its too short',
    max: 'Its too long',
    regex: 'Doesnt match the format',
  },
};

const initError = (isOk, visible, message) => {
  const defaultVisible = false;
  const defaultMessage = 'error foo foo';
  const defaultIsOk = false;
  return {
    isOk: isOk || defaultIsOk,
    visible: visible || defaultVisible,
    message: message || defaultMessage,
  };
};

const checkRegex = (text, validation) => {
  if (validation.regex === undefined) {
    return false;
  } else if (
    validation.not
      ? !text.match(validation.regex)
      : text.match(validation.regex)
  ) {
    return true;
  }
  return false;
};

const isEmpty = (text, validation) => {
  return validation.required && text === '';
};

const TriggerValidation = (text, error, validation) => {
  if (isEmpty(text, validation)) {
    error.current = initError(false, true, LOG.error.empty);
  } else if (text.length < validation.min) {
    error.current = initError(false, true, LOG.error.min);
  } else if (text.length > validation.max) {
    error.current = initError(false, true, LOG.error.max);
  } else if (checkRegex(text, validation)) {
    error.current = initError(false, true, LOG.error.regex);
  } else {
    error.current = initError(true, false);
  }
};

export const CustomInput = ({type, title, label, state, validation}) => {
  const error = useRef(initError());
  const isPassword = type === 'password' ? true : false;

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input} secureTextEntry={isPassword} placeholder={title} onChangeText={text => {
        if (validation && state) {
          TriggerValidation(text, error, validation);
          state.setForm(state.name, text, error.current.isOk);
        }
      }} />
      {error.current.visible ? (
        <Text style={styles.inputError}>*{error.current.message}</Text>
      ) : null}
      <Text>{label ?? null}</Text>
    </View>
  );
};

