import useInput from './useInput'
import inputValidations from '../assets/datasets/inputValidations'
import useSubmit from './useSubmit'
import FormHookPipe from '../assets/controllers/FormHookPipe'

const useAddReview = () => {
  return FormHookPipe({
    review: useInput(inputValidations.review),
    submit: useSubmit()
  })
}

export default useAddReview
