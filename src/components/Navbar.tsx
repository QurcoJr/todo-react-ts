import { ROUTES } from '../constants'
import History from '../svgs/History'
import Tasks from '../svgs/Tasks'
import NavItem from './NavItem'

export default function Navbar() {
  return (
    <nav>
      <ul className="flex nav-list">
        <li>
          <NavItem route={ROUTES.HOME} name="Tasks" icon={<Tasks />} />
        </li>
        <li>
          <NavItem route={ROUTES.HISTORY} name="History" icon={<History />} />
        </li>
      </ul>
    </nav>
  )
}
