module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  turns = Math.pow(2, disksNumber) - 1
  tps = turnsSpeed / 3600
  seconds = Math.floor(turns / tps)
  return { turns: turns, seconds: seconds }
}
