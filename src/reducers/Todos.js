import Todo from './Todo';

const Todos = (state = [],action) => {
    switch(action.type){
        case "ADD":
            return [
                ...state,
                Todo(undefined,action)
            ];
        case "TOGGLE":
            return state.map((item)=>{return Todo(item,action)});
        default:
            return state;
    }
}
export default Todos;