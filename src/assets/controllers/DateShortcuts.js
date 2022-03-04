const getHumanValue = value => {
  let result = ''
  const seconds = 1000
  const minutes = seconds * 60
  const hours = minutes * 60
  const days = hours * 24
  if (value < 1000) {
    result = 'just now'
  } if (value / seconds > 1) {
    result = `${Math.floor(value / seconds)} seconds`
  } if (value / minutes > 1) {
    result = `${Math.floor(value / minutes)} minutes`
  } if (value / hours > 1) {
    result = `${Math.floor(value / hours)} hours`
  } if (value / days > 1) {
    result = `${Math.floor(value / days)} days`
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
  getHumanValue
}

export default DateShortcuts
