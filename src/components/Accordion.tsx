import { useRef, useState } from 'react'
import chevronIcon from '../assets/chevron.svg'
import editIcon from '../assets/edit.svg'
import checkIcon from '../assets/check.svg'
import deleteIcon from '../assets/delete.svg'
import { Task, TodoType } from '../constants'
import { markAsCompleted, deleteTask } from '../api'
import { useAppContext } from '../context/AppContext'
import { useOutletCtx } from './Layout'

interface AccordionItemProps {
  heading: string
  body: string
  isOpen: boolean
  onClick: () => void
  type: TodoType
  id: string
}

const AccordionItem = ({
  heading,
  body,
  isOpen,
  onClick,
  type,
  id
}: AccordionItemProps) => {
  const contentHeight = useRef<HTMLDivElement | null>(null)
  const { invalidateData } = useAppContext()
  const { onEditClick } = useOutletCtx()

  const handleMarkAsCompleteClick = (id: string) => {
    if (type === 'tasks') {
      markAsCompleted(id)
      invalidateData()
    }
  }

  const handleDeleteClick = (id: string) => {
    deleteTask({ id, type })
    invalidateData()
  }

  return (
    <div className="accordion-wrapper ">
      <button
        className={`heading-container flex justify-between items-center poppins-medium ${
          isOpen ? 'active' : ''
        }`}
        onClick={onClick}
      >
        <p className="heading-content flex items-center">
          <span>{heading}</span>
          {type === 'history' && <img src={checkIcon} alt="complete" />}
        </p>
        <img
          src={chevronIcon}
          alt="arrow"
          className={`accordion-chevron ${isOpen ? 'active' : ''}`}
        />
      </button>

      <div
        ref={contentHeight}
        className="body-container"
        style={
          isOpen
            ? { height: contentHeight.current?.scrollHeight }
            : { height: '0px' }
        }
      >
        <p
          className={`body-content poppins-semibold ${isOpen ? 'active' : ''}`}
        >
          {body}
        </p>
      </div>
      <div
        className={`accordion-actions flex justify-between items-center ${
          isOpen ? 'active' : ''
        }`}
      >
        <div className="edit-delete-wrapper">
          {type === 'tasks' && (
            <button onClick={() => onEditClick(id)}>
              <img src={editIcon} alt="edit" />
            </button>
          )}
          <button onClick={() => handleDeleteClick(id)}>
            <img src={deleteIcon} alt="delete" />
          </button>
        </div>
        <button
          className="flex items-center completion-wrapper"
          onClick={() => handleMarkAsCompleteClick(id)}
        >
          <span className="poppins-medium">
            {type === 'tasks' ? 'Mark completed' : 'Completed'}
          </span>
          <img src={checkIcon} alt="complete" />
        </button>
      </div>
    </div>
  )
}

interface AccordionProps {
  type: TodoType
  data: Task[]
}

export default function Accordion({ data, type }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([])

  const handleItemClick = (index: number) => {
    setOpenIndices(prevIndices =>
      prevIndices.includes(index)
        ? prevIndices.filter(i => i !== index)
        : [...prevIndices, index]
    )
  }

  return (
    <div className="flex flex-column accordions-wrapper">
      {data.map((item, index) => (
        <AccordionItem
          id={item.id}
          key={item.id}
          heading={item.name}
          body={item.description}
          isOpen={openIndices.includes(index)}
          onClick={() => handleItemClick(index)}
          type={type}
        />
      ))}
    </div>
  )
}
