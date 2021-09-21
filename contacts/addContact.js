import fs from 'fs/promises'
import { nanoid } from 'nanoid'
import contactsOperations from './index.js'
import contactsPath from './filePath.js'

const addContact = async (name, email, phone) => {
  try {
    const contacts = await contactsOperations.getAll()
    const newContact = { name, email, phone, id: nanoid() }
    contacts.push(newContact)
    console.table(newContact)

    await fs.writeFile(contactsPath, JSON.stringify(contacts))
    console.table(await contactsOperations.getAll())
    return newContact
  } catch (error) {
    console.log(error.message)
  }
}

export default addContact
