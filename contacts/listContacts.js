import fs from 'fs/promises'
import contactsPath from './filePath.js'

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, 'utf-8')
    console.table(JSON.parse(contacts))
  } catch (error) {
    console.log(error.message)
  }
}

export default listContacts
