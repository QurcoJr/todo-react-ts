import { useLocation } from 'react-router-dom'
import { ROUTES } from '../constants'
import { clearTasks, clearHistory } from '../api'
import { useAppContext } from '../context/AppContext'

export default function Clear() {
  const { invalidateData } = useAppContext()

  const location = useLocation()

  const handleClear = () => {
    if (location.pathname === ROUTES.HOME) {
      clearTasks()
    } else {
      clearHistory()
    }
    invalidateData()
  }

  return (
    <button onClick={handleClear} className="clear-btn poppins-medium">
      Clear {location.pathname === ROUTES.HOME ? 'all tasks' : 'history'}
    </button>
  )
}
