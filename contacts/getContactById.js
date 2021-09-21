import contactsOperations from './index.js'

async function getContactById(contactId) {
  try {
    const contacts = await contactsOperations.getAll()
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

export default getContactById
