import useInput from './useInput'
import inputValidations from '../assets/datasets/inputValidations'
import useSubmit from './useSubmit'
import FormHookPipe from '../assets/controllers/FormHookPipe'

const useLogin = () => {
  return FormHookPipe({
    email: useInput(inputValidations.email),
    password: useInput(inputValidations.string),
    submit: useSubmit()
  })
}

export default useLogin
