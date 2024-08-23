import { setData } from '../utils'
import getAppData from './get-app-data'

export default function markAsCompleted(id: string) {
  const data = getAppData()

  const taskToComplete = data.tasks.find(task => task.id === id)

  if (taskToComplete) {
    const newData = {
      ...data,
      tasks: data.tasks.filter(task => task.id !== id),
      history: [taskToComplete, ...data.history]
    }

    setData(newData)
  }
}
