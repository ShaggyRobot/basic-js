module.exports = function getSeason(date) {
  seasons = {
    0: 'winter',
    1: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'fall',
    9: 'fall',
    10: 'fall',
    11: 'winter',
  }

  if (!date) {
    return 'Unable to determine the time of year!'
  }

  if (date instanceof Date && isFinite(date)) {
    return seasons[date.getMonth()]
  }
  throw 'Error!'
}
