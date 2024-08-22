import Clear from './Clear'
import Navbar from './Navbar'
import Search from './Search'
import UserCard from './UserCard'

export default function Header() {
  return (
    <header>
      <UserCard />
      <Search />
      <div className="flex justify-between items-end">
        <Navbar />
        <Clear />
      </div>
    </header>
  )
}
