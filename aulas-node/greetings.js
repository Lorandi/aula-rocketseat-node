const getFlag = require('./exportGetFlag')

console.log(`Olá ${getFlag('--name')}. ${getFlag('--greeting')}`)