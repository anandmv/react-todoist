const Todo = (state = {},action)=>{
    switch(action.type){
        case "ADD":
            return {
                ...state,
                id:action.id,
                text:action.text,
                created:new Date(),
                completed:false
            }
        case "TOGGLE":
            if(state.id!==action.id){
                return state;
            }
            return{
                ...state,
                completed:!state.completed
            }
        default:
            return state;
    }
}

export default Todo;