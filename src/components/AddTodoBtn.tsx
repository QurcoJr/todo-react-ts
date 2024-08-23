import plusIcon from '../assets/plus.svg'

interface Props {
  onClick: () => void
}

export default function AddTodoBtn({ onClick }: Props) {
  return (
    <button className="add-todo-btn fixed flex place-center" onClick={onClick}>
      <img src={plusIcon} alt="plus" />
    </button>
  )
}
