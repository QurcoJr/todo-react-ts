import { Routes, Route } from 'react-router-dom'
import Home from './screens/home'
import History from './screens/history'
import Layout from './components/layout'

const ROUTES = {
  HOME: '/',
  HISTORY: '/history'
}

export default function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.HISTORY} element={<History />} />
      </Route>
    </Routes>
  )
}
