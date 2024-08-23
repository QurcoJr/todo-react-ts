import { Outlet, useNavigate, useOutletContext } from 'react-router-dom'
import Header from './Header'
import AddTodoBtn from './AddTodoBtn'
import { useState } from 'react'
import Modal from './Modal'
import Input from './Input'
import Textarea from './Textarea'
import { addTask, getTask, editTask } from '../api'
import { useAppContext } from '../context/AppContext'
import { ROUTES } from '../constants'

type OutletContextType = { onEditClick: (_id: string) => void }

export default function Layout() {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const { invalidateData } = useAppContext()
  const navigate = useNavigate()
  const [edit, setEdit] = useState({
    isEditing: false,
    id: ''
  })

  const handleClear = () => {
    setName('')
    setDescription('')
    setEdit({
      isEditing: false,
      id: ''
    })
  }

  const handleClose = () => {
    setIsAddTaskModalOpen(false)
    handleClear()
  }

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (edit.isEditing) {
      editTask({ id: edit.id, name, description })
    } else {
      addTask({ name, description })
    }

    invalidateData()
    setIsAddTaskModalOpen(false)
    handleClear()
    navigate(ROUTES.HOME)
  }

  const handleEdit = (id: string) => {
    const task = getTask(id)
    if (task) {
      setEdit({ isEditing: true, id })
      setName(task.name)
      setDescription(task.description)
      setIsAddTaskModalOpen(true)
    }
  }

  return (
    <div className="container">
      <Header />
      <main className="main-wrapper">
        <Outlet
          context={{ onEditClick: handleEdit } satisfies OutletContextType}
        />
      </main>
      <AddTodoBtn onClick={() => setIsAddTaskModalOpen(true)} />

      <Modal
        isOpen={isAddTaskModalOpen}
        onClose={handleClose}
        heading="Create Task"
      >
        <form onSubmit={handleSave}>
          <Input
            autoFocus
            label="Task Name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <div className="text-area-wrapper">
            <Textarea
              placeholder="Type task details here..."
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>
          <button className="save-btn poppins-medium" type="submit">
            Save
          </button>
        </form>
      </Modal>
    </div>
  )
}

export function useOutletCtx() {
  return useOutletContext<OutletContextType>()
}
