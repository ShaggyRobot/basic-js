module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  DT = []
  for (let i = 0; i < members.length; i++) {
    const member = members[i]
    typeof member == 'string'
      ? (members[i] = member.trim())
      : (members[i] = false)
  }
  members.forEach((member) => {
    if (member) {
      DT.push(member[0].toUpperCase())
    }
  })
  DT.sort()
  return DT.join('')
}
