import { Task } from '../constants'
import getAppData from './get-app-data'

export default function getTask(id: string): Task | undefined {
  const data = getAppData()
  const task = data.tasks.find(item => item.id === id)

  return task
}
