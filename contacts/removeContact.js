import fs from 'fs/promises'

import contactsPath from './filePath.js'
import contactsOperations from './index.js'

async function removeContact(id) {
  try {
    const contacts = await contactsOperations.getAll()
    const removeContact = await contactsOperations.getContactById(id)
    const newContacts = contacts.filter((contact) => String(contact.id) !== id)
    //   contacts.filter((contact) => contact.id !== Number(id))

    if (!removeContact) {
      console.log(`Contact with such id=${id} cannot not found!`)
      return
    }

    await fs.writeFile(contactsPath, JSON.stringify(newContacts))
    console.log(
      `Contact with such id "${id}" was deleted! Please find below the updated list of contacts: `,
    )
    console.table(await contactsOperations.getAll())
    console.log('Success remove')
  } catch (error) {
    console.log(error.message)
  }
}

// async function updateContacts(newContacts) {
//   try {
//     // const contacts = await contactsOperations.getAll()
//     // const contact = await contactsOperations.getAll()
//     await fs.writeFile(contactsPath, JSON.stringify(newContacts))
//   } catch (error) {
//     console.log(error)
//   }
// }
// // console.log(contacts)

// async function removeContact(contactId) {
//   try {
//     const contacts = await contactsOperations.getAll()
//     // const contact = await contactsOperations.getContactById(contactId)
//     // console.log(contacts)
//     const idx = contacts.findIndex((contact) => contact.id === contactId)
//     console.log(idx)

//     // console.log(cont)
//     if (idx === -1) {
//       return console.log(`Товар с id=${contactId} не найден`)
//     }
//     contacts.splice(idx, 1)
//     // const newContacts = contacts.filter((item) => item.id !== contactId)
//     // console.log(contacts)

//     // const cont = contacts.splice(idx, 1)
//     // console.log(cont)
//     // await updateContacts(newContacts)
//     // return contacts[idx]
//   } catch (error) {
//     console.log(error.message)
//   }
// }
export default removeContact
