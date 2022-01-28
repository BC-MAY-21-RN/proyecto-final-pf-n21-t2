import {useState, useEffect} from 'react';

const allIsOk = (username, email, password, mobile, checkbox, dogSize) => {
  return username.isOk && email.isOk && password.isOk && mobile.isOk && checkbox.isOk && dogSize.isOk;
};

const getSetState = (setUsername, setEmail, setPassword, setMobile, setCheckbox, setDogSize) => {
  return (action, value, isOk) => {
    let result = {value: value, isOk: isOk};
    if (action === 'email') {
      setEmail(result);
    } else if (action === 'password') {
      setPassword(result);
    } else if (action === 'username') {
      setUsername(result);
    } else if (action === 'mobile') {
      setMobile(result);
    } else if (action === 'checkbox') {
      setCheckbox(result);
    } else if (action === 'dogSize') {
      setDogSize(result);
    }
  };
};

const useSignUpWalkerForm = () => {
  let [username, setUsername] = useState({value: '', isOk: false});
  let [email, setEmail] = useState({value: '', isOk: false});
  let [password, setPassword] = useState({value: '', isOk: false});
  let [mobile, setMobile] = useState({value: '', isOk: false});
  let [checkbox, setCheckbox] = useState({value: '', isOk: false});
  let [dogSize, setDogSize] = useState({value: '', isOk: false});
  let [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(!allIsOk(username, email, password, mobile, checkbox, dogSize));
  }, [username, email, password, mobile, checkbox, dogSize]);

  const setState = getSetState(setUsername, setEmail, setPassword, setMobile, setCheckbox, setDogSize);

  return [{username, email, password, mobile, checkbox, dogSize, disabled}, setState];
};

export default useSignUpWalkerForm;
