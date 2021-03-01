class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isdirect = isDirect
  }

  abc() {  // Generating alphabet
    let abcdf = []
    for (let i = 65; i <= 90; i++) {
      abcdf.push(String.fromCharCode(i))
    }
    return abcdf
  }

  abc = this.abc()

  tabulaRecta() {  // Generating the Tabula Recta
    let tabulaRecta = {}
    let offset = 0
    for (let row = 65; row <= 90; row++) {
      tabulaRecta[String.fromCharCode(row)] = {} // Generating rows
      for (let i = 0; i <= 25; i++) {  // Populating rows
        tabulaRecta[String.fromCharCode(row)][
          String.fromCharCode(65 + i)
        ] = this.abc.slice(offset).concat(this.abc.slice(0, offset))[i] //rotating alphabet array by offset
      }
      offset++
    }
    return tabulaRecta
  }

  tabulaRect = this.tabulaRecta()

  getKey(obj, val) {  // Get key by value
    return Object.keys(obj).find((key) => obj[key] === val)
  }

  encrypt(string, key) {
    let stringArr = string.toUpperCase().split('')
    let keyArr = key.toUpperCase().split('')
    let result = []

    for (let i = 0; i < string.length; i++) {
      if (!this.abc.includes(stringArr[i])) {
        result.push(stringArr[i])
        continue
      }
      result.push(this.tabulaRect[stringArr[i]][keyArr[0]])
      keyArr = keyArr.slice(1, keyArr.length).concat(keyArr.slice(0, 1))  // Rotating key
    }
    if (!this.isdirect) {
      result.reverse()
    }
    return result.join('')
  }

  decrypt(string, key) {
    let stringArr = string.toUpperCase().split('')
    let keyArr = key.toUpperCase().split('')
    let result = []

    for (let i = 0; i < string.length; i++) {
      if (!this.abc.includes(stringArr[i])) {
        result.push(stringArr[i])
        continue
      }
      result.push(this.getKey(this.tabulaRect[keyArr[0]], stringArr[i]))
      keyArr = keyArr.slice(1, keyArr.length).concat(keyArr.slice(0, 1)) // Rotating key
    }
    if (!this.isdirect) {
      result.reverse()
    }
    return result.join('')
  }
}

module.exports = VigenereCipheringMachine
