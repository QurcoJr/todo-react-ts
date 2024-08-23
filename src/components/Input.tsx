import { useState } from 'react'

interface Props {
  label: string
}

export default function Input({ label }: Props) {
  const [focused, setFocused] = useState(false)
  const [filled, setFilled] = useState(false)

  const handleFocus = () => setFocused(true)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false)
    setFilled(!!e.target.value)
  }

  return (
    <div className="input-container">
      <label
        className={`input-label poppins-regular ${
          focused || filled ? 'focused poppins-semibold' : ''
        }`}
      >
        {label}
      </label>
      <input
        className="input-field"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}
