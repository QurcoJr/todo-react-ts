import { setData } from '../utils'
import getAppData from './get-app-data'

export default function editTask({
  id,
  name,
  description
}: {
  id: string
  name: string
  description: string
}) {
  const data = getAppData()

  const index = data.tasks.findIndex(item => item.id === id)

  if (index !== -1) {
    const newTasks = [...data.tasks]
    newTasks[index] = {
      ...newTasks[index],
      name,
      description
    }

    const newData = {
      ...data,
      tasks: newTasks
    }

    setData(newData)
  }
}
