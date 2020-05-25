const bcrypt = require('bcryptjs')

function hashPassword(input) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(input, salt);
  return hash
}

function checkPassword(input,hash){
  return bcrypt.compareSync(input, hash);
}

module.exports = {hashPassword,checkPassword}