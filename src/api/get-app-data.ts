import { AppData, INITIAL_DATA } from '../constants'
import { getData } from '../utils'
import initLocalStorage from './init-local-storage'

export default function getAppData(): AppData {
  const data = getData()
  if (data) {
    return data
  }

  initLocalStorage()
  return INITIAL_DATA
}
