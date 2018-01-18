const todoStateName = "todoState";
export const loadState = () =>{
    try{
        let stateData = localStorage.getItem(todoStateName);
        if(stateData===undefined||stateData===null){
            return undefined;
        }
        return JSON.parse(stateData);
    }
    catch(err){
        return undefined;
    }
}

export const saveState = (state)=>{
    try{
        let stateData = JSON.stringify(state);
        localStorage.setItem(todoStateName,stateData);
    }
    catch(err){

    }
}