const seconds = 1000
const minutes = seconds * 60
const hours = minutes * 60
const days = hours * 24
const week = days * 7
const values = {
  seconds,
  minutes,
  hours,
  days,
  week
}

const getValidity = (value) => (timeValue) => {
  return value / timeValue > 1
}

const getTimeResultString = (value) => (timeValue) => {
  Math.floor(value / timeValue)
}

const getHumanValue = value => {
  let result = ''
  const validity = getValidity(value)
  const getTimeResult = getTimeResultString(value)
  if (value < 1000) {
    result = 'just now'
  } if (validity(values.seconds)) {
    result = `${getTimeResult(values.seconds)} seconds`
  } if (validity(values.minutes)) {
    result = `${getTimeResult(values.minutes)} minutes`
  } if (validity(values.hours)) {
    result = `${getTimeResult(values.hours)} hours`
  } if (validity(values.days)) {
    result = `${getTimeResult(values.days)} days`
  }
  return result
}

const getTravelValues = (startDatetime, endDatetime) => {
  const currentDate = new Date()
  const rawDuration = parseInt(endDatetime) - parseInt(startDatetime)
  const humanDuration = getHumanValue(rawDuration)
  const rawStartsIn = parseInt(startDatetime) - currentDate.getTime()
  const humanStartsIn = getHumanValue(rawStartsIn)
  const rawEndsIn = parseInt(endDatetime) - currentDate.getTime()
  const humanEndsIn = getHumanValue(rawEndsIn)
  return [humanDuration, humanStartsIn, humanEndsIn]
}

const DateShortcuts = {
  getTravelValues,
  getHumanValue,
  values
}

export default DateShortcuts
