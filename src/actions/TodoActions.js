export const addTodo = (text)=>{
    return {
      'type':"ADD",
      text
    };
  }
export const toggleTodo = (id) =>{
    return{
        'type':"TOGGLE",
        id
    }
}
export const setVisibleList = (filter) =>{
    return {
        'type':"FILTER",
        filter
    }
}
