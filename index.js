// import contactsOperations from './contacts/index.js'
import {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} from './contacts.js'

import { Command } from 'commander'
const program = new Command()
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone')

program.parse(process.argv)

const argv = program.opts()

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case 'list':
        // return await contactsOperations.listContacts()
        return await listContacts()

        break
      case 'get':
        // return await contactsOperations.getContactById(id)
        return await getContactById(id)
        break
      case 'add':
        // return await contactsOperations.addContact(name, email, phone)
        return await addContact(name, email, phone)
        break
      case 'remove':
        // return await contactsOperations.removeContact(id)
        return await removeContact(id)
        break
      default:
        console.warn('\x1B[31m Unknown action type!')
    }
  } catch (error) {
    console.log('error')
    throw new error()
  }
}
invokeAction(argv)
