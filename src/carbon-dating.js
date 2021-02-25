const CustomError = require('../extensions/custom-error')

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730
const k = 0.693 / HALF_LIFE_PERIOD

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != String) {
    return false
  }
  let sa = Number(sampleActivity)
  return isNaN(sa) ? false : Math.ceil(Math.log(MODERN_ACTIVITY / sa) / k)
}
