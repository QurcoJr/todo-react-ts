import { Routes, Route } from 'react-router-dom'
import Home from './screens/home'
import History from './screens/history'
import { ROUTES } from './constants'
import Layout from './components/Layout'
import AppContextProvider from './context/AppContext'

export default function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.HISTORY} element={<History />} />
        </Route>
      </Routes>
    </AppContextProvider>
  )
}
