import { AppData, LOCAL_STORAGE_KEY } from './constants'

export const serialize = (data: unknown) => {
  return JSON.stringify(data)
}

export const deserialize = (json: string) => {
  return JSON.parse(json)
}

export const getData = () => {
  const json = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (!json) {
    return null
  }

  return deserialize(json)
}

export const setData = (value: AppData) => {
  return localStorage.setItem(LOCAL_STORAGE_KEY, serialize(value))
}
