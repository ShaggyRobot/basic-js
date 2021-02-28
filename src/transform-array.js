module.exports = function transform(arr) {
  arrCopy = []
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i]
    switch (e) {
      case '--discard-next':
        if (i + 1 < arr.length) {
          i++
        }
        continue

      case '--discard-prev':
        if (i - 1 >= 0 && arr[i - 2] != '--discard-next') {
          arrCopy.pop()
        }
        continue

      case '--double-next':
        if (i + 1 < arr.length) {
          arrCopy.push(arr[i + 1])
        }
        continue

      case '--double-prev':
        if (arr[i - 2] != '--discard-next' && i - 1 >= 0) {
          arrCopy.push(arr[i - 1])
        }
        continue

      default:
        arrCopy.push(e)
    }
  }
  return arrCopy
}
