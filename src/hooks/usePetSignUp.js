import useInput from './useInput'
import inputValidations from '../assets/datasets/inputValidations'
import useSubmit from './useSubmit'
import FormHookPipe from '../assets/controllers/FormHookPipe'

const usePetSignUp = () => {
  return FormHookPipe({
    name: useInput(inputValidations.string),
    age: useInput(inputValidations.string),
    weight: useInput(inputValidations.string),
    height: useInput(inputValidations.string),
    specialCares: useInput(inputValidations.string),
    petImage: useInput(inputValidations.string),
    submit: useSubmit()
  })
}

export default usePetSignUp
