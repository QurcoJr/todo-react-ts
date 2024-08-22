import { Routes, Route } from 'react-router-dom'
import Home from './screens/home'
import History from './screens/history'
import { ROUTES } from './constants'
import Layout from './components/Layout'

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
