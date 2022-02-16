import { useState, useEffect } from 'react'

const allIsOk = (email, password) => {
  return email.isOk && password.isOk
}

const useLoginForm = () => {
  const [email, setEmail] = useState({ value: '', isOk: false })
  const [password, setPassword] = useState({ value: '', isOk: false })
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setDisabled(!allIsOk(email, password))
  }, [email, password])

  const setState = (action, value, isOk) => {
    if (action === 'email') {
      setEmail({ value: value, isOk: isOk })
    } else if (action === 'password') {
      setPassword({ value: value, isOk: isOk })
    }
  }

  return [{ email, password, disabled }, setState]
}

export default useLoginForm
