import { useState } from 'react'
import searchIcon from '../assets/search.svg'
import { useDebouncedCallback } from 'use-debounce'
import { searchTasks } from '../api'
import { useAppContext } from '../context/AppContext'
import { ROUTES } from '../constants'

export default function Search() {
  const [value, setValue] = useState('')
  const { setData } = useAppContext()

  const debouncedSearch = useDebouncedCallback((value: string) => {
    const type = location.pathname === ROUTES.HOME ? 'tasks' : 'history'

    const filteredResults = searchTasks({ term: value, type })
    setData(filteredResults)
  }, 300)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)

    debouncedSearch(value)
  }

  return (
    <div className="relative search-wrapper">
      <input
        className="search-input"
        placeholder="Search for notes"
        value={value}
        onChange={handleChange}
      />
      <button className="absolute btn search-btn">
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  )
}
