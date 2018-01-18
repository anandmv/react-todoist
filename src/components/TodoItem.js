import React from 'react';
import {connect} from 'react-redux';

import {toggleTodo} from '../actions/TodoActions';

let TodoItem=({todo,onTodoClick})=>{
        return (
                <div onClick={()=>{onTodoClick(todo.id)}} className="form-check">
                        <input className="form-check-input todoCheckbox" type="checkbox" checked={todo.completed} readOnly="true"/>
                        <label className="form-check-label">{todo.text}</label>
                </div>
        )
}
const mapDispatchToProps = (dispatch)=>{
        return {
                onTodoClick:(id)=>{
                        dispatch(toggleTodo(id))
                }   
        }
}
TodoItem = connect(null,mapDispatchToProps)(TodoItem)
export default TodoItem;
  