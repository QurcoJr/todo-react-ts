import { setData } from '../utils'
import getAppData from './get-app-data'

export default function clearTasks() {
  const appData = getAppData()
  setData({ ...appData, tasks: [] })
}
