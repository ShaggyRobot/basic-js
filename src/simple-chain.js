const chainMaker = {
  length: 0,
  chain: [],
  chainString: '',
  getLength() {
    return this.length
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
    this.length++
    return this
  },
  removeLink(position) {
    if (position > this.length + 1 || position < 1) {
      this.chain = []  // If chain is not cleared, then the values ​​from the previous tests can fall into the current chain
      throw 'Error: Wrong Link'
    }
    this.chain.splice(position - 1, 1)
    this.length--
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    this.chainString = this.chain.join('~~')
    this.chain = [] // Clear chain
    return this.chainString
  },
}

module.exports = chainMaker
