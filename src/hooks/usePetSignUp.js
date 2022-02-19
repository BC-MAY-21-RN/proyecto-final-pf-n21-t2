// import { StyleSheet, Text, View } from 'react-native'
// import { useState } from 'react';
// import { userSession } from '../store/reducers/userSession'

// const usePetSignUp = () => {
//     const [petInfo, setPetInfo] = useState({
//         name: '',
//         age: '',
//         weight: '',
//         height: '',
//         specialCares: '',
//         useruid: userSession.getState().id,
//       });
//       const handleInputName = (text)=> setPetInfo(()=> ({...petInfo, name: text}))
//       const handleInputAge = (text)=> setPetInfo(()=> ({...petInfo, age: text}))
//       const handleInputWeight = (text)=> setPetInfo(()=> ({...petInfo, weight: text}))
//       const handleInputHeight = (text)=> setPetInfo(()=> ({...petInfo, height: text}))
//       const handleInputSpecialCares = (text)=> setPetInfo(()=> ({...petInfo, specialCares: text}))

//       return { handleInputName, handleInputAge, handleInputWeight, handleInputHeight, handleInputSpecialCares, petInfo }

// }

// export default usePetSignUp

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
