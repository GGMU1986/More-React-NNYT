import React from 'react'

const TodoListItem = ({ todo, deleteTodo }) => {
  return (
    <li>
      {todo.content}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoListItem