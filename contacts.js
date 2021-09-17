const fs = require('fs')

const fsRead = fs.readFile('db/contacts.json', 'utf-8', (error, data) => {
  console.log(error)
  console.log(data)
})
// console.log(fsRead)
module.exports = fsRead
