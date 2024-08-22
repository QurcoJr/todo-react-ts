import { useRef, useState } from 'react'
import chevronIcon from '../assets/chevron.svg'
import editIcon from '../assets/edit.svg'
import checkIcon from '../assets/check.svg'
import deleteIcon from '../assets/delete.svg'

interface Props {
  heading: string
  body: string
  isOpen: boolean
  onClick: () => void
  type: 'task' | 'history'
}

const AccordionItem = ({ heading, body, isOpen, onClick, type }: Props) => {
  const contentHeight = useRef<HTMLDivElement | null>(null)

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
            ? { height: contentHeight.current!.scrollHeight }
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
          {type === 'task' && (
            <button>
              <img src={editIcon} alt="edit" />
            </button>
          )}
          <button>
            <img src={deleteIcon} alt="delete" />
          </button>
        </div>
        <button className="flex items-center completion-wrapper">
          <span className="poppins-medium">
            {type === 'task' ? 'Mark completed' : 'Completed'}
          </span>
          <img src={checkIcon} alt="complete" />
        </button>
      </div>
    </div>
  )
}

export default function Accordion() {
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
      <AccordionItem
        heading={'heading'}
        body={
          'lorem nasdjsa jiasdka jioasdjoassdjpabskdm sa asdasodnas dasdasnbius dasda asdnoasnd jansdsamnoas dasdask asdasdpon jasm das disj'
        }
        isOpen={openIndices.includes(0)}
        onClick={() => handleItemClick(0)}
        type="task"
      />
      <AccordionItem
        heading={'heading'}
        body={'body'}
        isOpen={openIndices.includes(1)}
        onClick={() => handleItemClick(1)}
        type="history"
      />
      <AccordionItem
        heading={'heading'}
        body={'body'}
        isOpen={openIndices.includes(2)}
        onClick={() => handleItemClick(2)}
        type="task"
      />
    </div>
  )
}
