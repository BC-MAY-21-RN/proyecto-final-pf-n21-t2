import useInput from './useInput'
import inputValidations from '../assets/datasets/inputValidations'
import useSubmit from './useSubmit'
import FormHookPipe from '../assets/controllers/FormHookPipe'

const usePetSignUp = () => {
  return FormHookPipe({
    name: useInput(inputValidations.string),
    age: useInput(inputValidations.age),
    weight: useInput(inputValidations.weight),
    height: useInput(inputValidations.height),
    specialCares: useInput(inputValidations.string),
    petImage: useInput(),
    submit: useSubmit()
  })
}

export default usePetSignUp
