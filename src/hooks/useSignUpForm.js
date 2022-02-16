import { useState, useEffect } from 'react'

const allIsOk = (username, email, password, mobile, checkbox, dogSize, address) => {
  return username.isOk && email.isOk && password.isOk && mobile.isOk && checkbox.isOk && dogSize.isOk && address.isOk
}

const getSetState = (setUsername, setEmail, setPassword, setMobile, setCheckbox, setDogSize, setAddress) => {
  return (action, value, isOk) => {
    const result = { value: value, isOk: isOk }
    switch (action) {
      case 'email':
        setEmail(result); break
      case 'username':
        setUsername(result); break
      case 'password':
        setPassword(result); break
      case 'checkbox':
        setCheckbox(result); break
      case 'mobile':
        setMobile(result); break
      case 'dogSize':
        setDogSize(result); break
      case 'address':
        setAddress(result); break
    }
  }
}

const useSignUpForm = (type) => {
  const [username, setUsername] = useState({ value: '', isOk: false })
  const [email, setEmail] = useState({ value: '', isOk: false })
  const [password, setPassword] = useState({ value: '', isOk: false })
  const [mobile, setMobile] = useState({ value: '', isOk: false })
  const [checkbox, setCheckbox] = useState({ value: '', isOk: false })
  const [dogSize, setDogSize] = useState({ value: '', isOk: type !== 'walker' })
  const [address, setAddress] = useState({ value: '', isOk: type !== 'client' })
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setDisabled(!allIsOk(username, email, password, mobile, checkbox, dogSize, address))
  }, [username, email, password, mobile, checkbox, dogSize, address])

  const setState = getSetState(setUsername, setEmail, setPassword, setMobile, setCheckbox, setDogSize, setAddress)

  return [{ username, email, password, mobile, checkbox, dogSize, address, disabled }, setState]
}

export default useSignUpForm
