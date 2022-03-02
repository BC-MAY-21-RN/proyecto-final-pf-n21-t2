import useInput from './useInput'
import useSubmit from './useSubmit'
import FormHookPipe from '../assets/controllers/FormHookPipe'

const useWalkDatetime = () => {
  return FormHookPipe({
    start: useInput(),
    end: useInput(),
    submit: useSubmit()
  })
}

export default useWalkDatetime
