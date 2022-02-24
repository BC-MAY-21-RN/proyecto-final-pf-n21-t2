import useInput from './useInput'
import inputValidations from '../assets/datasets/inputValidations'
import useSubmit from './useSubmit'
import FormHookPipe from '../assets/controllers/FormHookPipe'

const useSignUp = (type) => {
  return FormHookPipe({
    username: useInput(inputValidations.string),
    email: useInput(inputValidations.email),
    password: useInput(inputValidations.string),
    mobile: useInput(inputValidations.string),
    checkbox: useInput(),
    dogSize: useInput(inputValidations.string, null, type !== 'walker'),
    address: useInput(inputValidations.string, null, type !== 'client'),
    image: useInput(),
    submit: useSubmit()
  })
}

export default useSignUp
