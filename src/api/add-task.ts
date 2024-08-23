import { setData } from '../utils'
import getAppData from './get-app-data'
import { v4 as uuidv4 } from 'uuid'

export default function addTask({
  name,
  description
}: {
  name: string
  description: string
}) {
  const data = getAppData()
  const newTasks = {
    ...data,
    tasks: [{ name, description, id: uuidv4() }, ...data.tasks]
  }
  setData(newTasks)
}
