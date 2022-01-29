import {useState, useEffect} from 'react';

const allIsOk = (username, email, password, mobile, checkbox, address) => {
  return username.isOk && email.isOk && password.isOk && mobile.isOk && checkbox.isOk && address.isOk;
};

const getSetState = (setUsername, setEmail, setPassword, setMobile, setCheckbox, setAddress) => {
  return (action, value, isOk) => {
    let result = {value: value, isOk: isOk};
    switch(action){
      case 'email':
        setEmail(result);
        break;
      case 'username':
        setUsername(result);
        break;
      case 'password':
        setPassword(result);
        break;
      case 'checkbox':
        setCheckbox(result);
        break;
      case 'mobile':
        setMobile(result);
        break;
      case 'address':
        setAddress(result);
        break;
    }
  };
};

const useSignUpClientForm = () => {
  let [username, setUsername] = useState({value: '', isOk: false});
  let [email, setEmail] = useState({value: '', isOk: false});
  let [password, setPassword] = useState({value: '', isOk: false});
  let [mobile, setMobile] = useState({value: '', isOk: false});
  let [checkbox, setCheckbox] = useState({value: '', isOk: false});
  let [address, setAddress] = useState({value: '', isOk: false});
  let [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(!allIsOk(username, email, password, mobile, checkbox, address));
  }, [username, email, password, mobile, checkbox, address]);

  const setState = getSetState(setUsername, setEmail, setPassword, setMobile, setCheckbox, setAddress);

  return [{username, email, password, mobile, checkbox, address, disabled}, setState];
};

export default useSignUpClientForm;
