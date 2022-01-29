import {useState, useEffect} from 'react';

const allIsOk = (username, email, password, mobile, checkbox, dogSize, address) => {
  console.log(address.isOk);
  return username.isOk && email.isOk && password.isOk && mobile.isOk && checkbox.isOk && dogSize.isOk && address.isOk;
};

const getSetState = (setUsername, setEmail, setPassword, setMobile, setCheckbox, setDogSize, setAddress) => {
  return (action, value, isOk) => {
    let result = {value: value, isOk: isOk};
    switch(action){
      case 'email':
        setEmail(result);break;
      case 'username':
        setUsername(result);break;
      case 'password':
        setPassword(result);break;
      case 'checkbox':
        setCheckbox(result);break;
      case 'mobile':
        setMobile(result);break;
      case 'dogSize':
        setDogSize(result);break;
      case 'address':
        setAddress(result);break;
    }
  };
};

const useSignUpForm = (type) => {
  console.log(type);
  let [username, setUsername] = useState({value: '', isOk: false});
  let [email, setEmail] = useState({value: '', isOk: false});
  let [password, setPassword] = useState({value: '', isOk: false});
  let [mobile, setMobile] = useState({value: '', isOk: false});
  let [checkbox, setCheckbox] = useState({value: '', isOk: false});
  let [dogSize, setDogSize] = useState({value: '', isOk: type === 'walker' ? false: true});
  let [address, setAddress] = useState({value: '', isOk: type === 'client' ? false: true});
  let [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(!allIsOk(username, email, password, mobile, checkbox, dogSize, address));
  }, [username, email, password, mobile, checkbox, dogSize, address]);

  const setState = getSetState(setUsername, setEmail, setPassword, setMobile, setCheckbox, setDogSize, setAddress);

  return [{username, email, password, mobile, checkbox, dogSize, address, disabled}, setState];
};

export default useSignUpForm;
