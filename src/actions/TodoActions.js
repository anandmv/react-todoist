let nextId = 0;

export const addTodo = (text)=>{
    return {
      'type':"ADD",
      text,
      "id":nextId++
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
