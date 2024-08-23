import { setData } from '../utils'
import getAppData from './get-app-data'

export default function clearHistory() {
  const appData = getAppData()
  setData({ ...appData, history: [] })
}
