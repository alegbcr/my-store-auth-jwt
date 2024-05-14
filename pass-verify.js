const bcrypt = require('bcrypt');

async function hashPassword() {
  const myPassword = 'myPassword';
  const hash = '$2b$10$mQFuG957km216lBMmJ21VOwM9WMCZoRmnz690uFhktfTcY13ExaX2'
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

hashPassword()
