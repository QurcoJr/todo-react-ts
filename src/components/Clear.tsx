import { useLocation } from 'react-router-dom'
import { ROUTES } from '../constants'

export default function Clear() {
  const location = useLocation()

  const handleClear = () => {
    alert('clear')
  }

  return (
    <button onClick={handleClear} className="clear-btn poppins-medium">
      Clear {location.pathname === ROUTES.HOME ? 'all tasks' : 'history'}
    </button>
  )
}
