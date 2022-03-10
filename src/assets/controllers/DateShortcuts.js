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

const getHumanValue = value => {
  let result = ''
  if (value < 1000) {
    result = 'just now'
  } if (value / values.seconds > 1) {
    result = `${Math.floor(value / values.seconds)} seconds`
  } if (value / values.minutes > 1) {
    result = `${Math.floor(value / values.minutes)} minutes`
  } if (value / values.hours > 1) {
    result = `${Math.floor(value / values.hours)} hours`
  } if (value / values.days > 1) {
    result = `${Math.floor(value / values.days)} days`
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
