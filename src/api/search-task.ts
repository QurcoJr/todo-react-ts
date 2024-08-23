import { TodoType } from '../constants'
import getAppData from './get-app-data'

export default function searchTasks({
  term,
  type
}: {
  term: string
  type: TodoType
}) {
  const data = getAppData()

  const arrayToSearch = type === 'tasks' ? data.tasks : data.history

  const filteredResults = arrayToSearch.filter(
    item =>
      item.name.toLowerCase().includes(term.toLowerCase()) ||
      item.description.toLowerCase().includes(term.toLowerCase())
  )

  return {
    ...data,
    [type]: filteredResults
  }
}
