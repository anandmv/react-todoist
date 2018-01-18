import React from 'react';
import {connect} from 'react-redux';
import TodoItem from './TodoItem';
const TodosContainer = ({todos})=> (
  <div>
    {todos.map((todo)=>(
      <TodoItem key={todo.id} todo={todo}></TodoItem>
    ))}
  </div>
)


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'ALL':
      return todos
    case 'COMPLETED':
      return todos.filter(t => t.completed)
    case 'ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos;
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.filter)
  }
}

const TodoList = connect(mapStateToProps,null)(TodosContainer);
export default TodoList;
  