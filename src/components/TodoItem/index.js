// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodo, onDeleteTodo} = props
  const {id, title} = eachTodo

  const onDelete = () => onDeleteTodo(id)

  return (
    <li className="list-item">
      <p className="todo-heading">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
