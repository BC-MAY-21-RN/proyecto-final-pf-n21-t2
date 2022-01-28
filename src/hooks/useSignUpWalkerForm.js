import {useState, useEffect} from 'react';

const allIsOk = (username, email, password, mobile, checkbox, dogSize) => {
  return username.isOk && email.isOk && password.isOk && mobile.isOk && checkbox.isOk && dogSize.isOk;
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

  const setState = (action, value, isOk) => {
    if (action === 'email') {
      setEmail({value: value, isOk: isOk});
    } else if (action === 'password') {
      setPassword({value: value, isOk: isOk});
    } else if (action === 'username') {
      setUsername({value: value, isOk: isOk});
    } else if (action === 'mobile') {
      setMobile({value: value, isOk: isOk});
    } else if (action === 'checkbox') {
      setCheckbox({value: value, isOk: isOk});
    } else if (action === 'dogSize') {
      setDogSize({value: value, isOk: isOk});
    }
  };

  return [{username, email, password, mobile, checkbox, dogSize, disabled}, setState];
};

export default useSignUpWalkerForm;
