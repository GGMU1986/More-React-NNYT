import React from 'react';
import TodoListItem from './todolistitem';

const Todos = ({ todos, deleteTodo }) => {
  return (
    <div className="todos">
      {todos.length ? (
        todos.map(todo => <TodoListItem 
                            key={todo.id} 
                            todo={todo}
                            deleteTodo={deleteTodo}
                          />)
      ) : <p>All caught up, just relax :)</p> }
    </div>
  )
}

export default Todos;