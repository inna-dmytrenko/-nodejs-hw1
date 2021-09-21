import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const contactsPath = path.join(__dirname, '..', 'db', 'contacts.json')

export default contactsPath
