const fs = require('fs/promises')

const readFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8')
    console.table(data)
  } catch (error) {
    console.log(error.message)
  }
}
readFile('db/contacts.json')

const fileOperation = (async(filePath, (type = 'read'), (data = '')) = {})

fileOperation('db/contacts.json').then((data) =>
  console.log(data).catch((error) => console.log(error)),
)

// fs.readFile('db/contacts.json', 'utf-8')
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
// console.log(error)
// console.log(data)

// console.log(fsRead)
// module.exports = fsRead
