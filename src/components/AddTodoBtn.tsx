import plusIcon from '../assets/plus.svg'

export default function AddTodoBtn() {
  const handleClick = () => {
    alert('add todo')
  }

  return (
    <button
      className="add-todo-btn fixed flex place-center"
      onClick={handleClick}
    >
      <img src={plusIcon} alt="plus" />
    </button>
  )
}
