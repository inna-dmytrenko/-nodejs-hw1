import { nanoid } from 'nanoid'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const contactsPath = path.join(__dirname, 'db', 'contacts.json')

async function getAll() {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    return console.log(error.message)
  }
}

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, 'utf-8')
    console.table(JSON.parse(contacts))
  } catch (error) {
    console.log(error.message)
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await getAll()
    const contact =
      contacts.find((contact) => String(contact.id) === contactId) ||
      `Contact ID${contactId} not found`
    if (!contact) {
      return null
    }
    console.table(contact)
    return contact
  } catch (error) {
    console.log(error.message)
  }
}

const addContact = async (name, email, phone) => {
  try {
    const contacts = await getAll()
    const newContact = { name, email, phone, id: nanoid() }
    contacts.push(newContact)
    console.table(newContact)

    await fs.writeFile(contactsPath, JSON.stringify(contacts))
    console.table(await getAll())
    return newContact
  } catch (error) {
    console.log(error.message)
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await getAll()
    const removeContact = await getContactById(contactId)
    const newContacts = contacts.filter(
      (contact) => String(contact.id) !== contactId,
    )

    if (!removeContact) {
      console.log(`Contact with such id=${contactId} cannot not found!`)
      return
    }

    await fs.writeFile(contactsPath, JSON.stringify(newContacts))
    console.log(
      `Contact with such id "${contactId}" was deleted! Please find below the updated list of contacts: `,
    )
    console.table(await getAll())
    console.log('Success remove')
  } catch (error) {
    console.log(error.message)
  }
}

export { listContacts, getContactById, addContact, removeContact }
