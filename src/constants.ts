export const ROUTES = {
  HOME: '/',
  HISTORY: '/history'
} as const

export const INITIAL_DATA = {
  tasks: [],
  history: []
}

export const LOCAL_STORAGE_KEY = 'todo_app' as const

export interface Task {
  name: string
  description: string
  id: string
}

export interface AppData {
  tasks: Task[]
  history: Task[]
}

export type TodoType = 'tasks' | 'history'
