import { Outlet } from 'react-router-dom'
import Header from './Header'
import AddTodoBtn from './AddTodoBtn'

export default function Layout() {
  return (
    <div className="container">
      <Header />
      <main className="main-wrapper">
        <Outlet />
      </main>
      <AddTodoBtn />
    </div>
  )
}
