import fs from 'fs/promises'
import contactsPath from './filePath.js'

async function getAll() {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    return console.log(error.message)
  }
}

export default getAll
