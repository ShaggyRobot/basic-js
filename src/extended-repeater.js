module.exports = function repeater(
  str,
  {
    separator = '+',
    additionSeparator = '|',
    repeatTimes = 1,
    addition = '',
    additionRepeatTimes = 1,
  }
) {
  strArr = []
  addArr = []
  for (let i = 0; i < additionRepeatTimes; i++) {
    addArr.push(String(addition))
  }
  addition = addArr.join(additionSeparator)
  for (let i = 0; i < repeatTimes; i++) {
    strArr.push(String(str).concat(addition))
  }
  return strArr.join(separator)
}
