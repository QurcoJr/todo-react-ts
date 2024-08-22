import { ReactElement } from 'react'
import { ROUTES } from '../constants'
import { NavLink } from 'react-router-dom'

type RouteValues = (typeof ROUTES)[keyof typeof ROUTES]

interface Props {
  route: RouteValues
  name: string
  icon: ReactElement
}

export default function NavItem({ route, name, icon }: Props) {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        `nav-link flex flex-column items-center ${isActive ? 'active' : ''}`
      }
    >
      <p className="poppins-medium">{name}</p>
      <div>{icon}</div>
    </NavLink>
  )
}
