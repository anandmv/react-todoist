import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/TodoActions';
import { FormGroup, FormControl} from 'react-bootstrap';
const TodoFormContainer = ({dispatch}) => {
	let input;
	return (
		<form onSubmit={(e)=>{
			e.preventDefault();
			dispatch(addTodo(this.input.value.trim()));
			this.input.value= "";
		}}>
		<FormGroup>
			<input
				className="form-control"
				ref={(node)=>{this.input = node;}}
				type="text"
				value={this.input}
				placeholder="Enter todo text"
				required
			/>
			<FormControl.Feedback />
		</FormGroup>
	</form>
	);
}
  
const TodoForm = connect()(TodoFormContainer);
export default TodoForm;
  