import { useEffect } from 'react'

const objectToArr = obj => {
  const arr = []
  for (const param in obj) {
    if (param !== 'submit') {
      arr.push(obj[param])
    }
  }
  return arr
}

let paramsArr

const FormHookPipe = params => {
  paramsArr = objectToArr(params)
  useEffect(() => {
    const ok = paramsArr.filter(p => !p.ok).length === 0
    params.submit.setOk(ok)
  }, paramsArr)

  return params
}

export default FormHookPipe
