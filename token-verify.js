const jwt = require('jsonwebtoken');

const secret = 'myDog';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcxNDE0Njk4Nn0.m7ooN8ydOK7c0VJXC43g0QzJYH_AZOFEg86YcHxAu6c';

function signToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = signToken(token, secret);
console.log(payload);
