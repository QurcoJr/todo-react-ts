import { createContext, ReactElement, useContext, useState } from 'react'
import { AppData, INITIAL_DATA } from '../constants'
import { getAppData } from '../api'

interface AppContextValue {
  data: AppData
  setData: React.Dispatch<React.SetStateAction<AppData>>
  invalidateData: () => void
}

interface Props {
  children: ReactElement
}

const AppContext = createContext<AppContextValue>({
  data: INITIAL_DATA,
  invalidateData: () => {},
  setData: () => {}
})

export default function AppContextProvider({ children }: Props) {
  const [data, setData] = useState(() => getAppData())

  const invalidateData = () => {
    setData(getAppData())
  }

  return (
    <AppContext.Provider
      children={children}
      value={{ data, setData, invalidateData }}
    />
  )
}

export const useAppContext = () => useContext(AppContext)
