// console.log('Welcome to BEST Paradise!')
const contactsoperations = require('./contacts')
const argv = require('yargs').argv
/*
1.Отримати весь список контактів
2.Отримати контакт по id
3.Видалити контакт по id
4.Додати контакт по id
*/

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      break
    case 'get':
      break
    case 'add':
      break
    case 'remove':
      break
    default:
      console.warn('\x1B[31m Unknown action type!')
  }
}

invokeAction(argv)
