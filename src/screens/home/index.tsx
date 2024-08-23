import { useState } from 'react'
import Accordion from '../../components/Accordion'
import Modal from '../../components/Modal'
import Textarea from '../../components/TextArea'
import Input from '../../components/Input'

export default function Home() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <Accordion />
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        heading="Create Task"
      >
        <>
          <Input label="Task Name" />
          <div className="text-area-wrapper">
            <Textarea placeholder="Type task details here..." />
          </div>
        </>
      </Modal>
    </>
  )
}
