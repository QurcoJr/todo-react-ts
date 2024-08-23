import { INITIAL_DATA, LOCAL_STORAGE_KEY } from '../constants'
import { serialize } from '../utils'

export default function initLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_KEY, serialize(INITIAL_DATA))
}
