import { TodoType } from '../constants'
import { setData } from '../utils'
import getAppData from './get-app-data'

export default function deleteTask({
  id,
  type
}: {
  id: string
  type: TodoType
}) {
  const data = getAppData()
  let newData

  if (type === 'tasks') {
    newData = {
      ...data,
      tasks: data.tasks.filter(task => task.id !== id)
    }
  } else {
    newData = {
      ...data,
      history: data.history.filter(task => task.id !== id)
    }
  }

  setData(newData)
}
