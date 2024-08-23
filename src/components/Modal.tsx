import { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import closeIcon from '../assets/close.svg'

interface Props {
  heading: string
  isOpen: boolean
  onClose: () => void
  children: ReactElement
}

export default function Modal({ heading, isOpen, onClose, children }: Props) {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal">
        <div className="modal-header flex justify-center">
          <h3 className="modal-heading poppins-bold">{heading}</h3>
          <button className="modal-close" onClick={onClose}>
            <img src={closeIcon} alt="close" />
          </button>
        </div>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </>,
    document.getElementById('modal-root')!
  )
}
