module.exports = class DepthCalculator {
  calculateDepth(arr, ref = 1) {
    if (!Array.isArray(arr)) {
      return 0
    }
  
    var depth = ref
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        var subdepth = this.calculateDepth(arr[i], ref + 1)
        if (subdepth > depth) {
          depth = subdepth
        }
      }
    }
    return depth
  }}
