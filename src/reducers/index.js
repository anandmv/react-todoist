import {combineReducers,createStore} from 'redux';

import VisibilityFilter from './VisibilityFilter';
import Todos from './Todos';

import {loadState,saveState} from '../Storage';

const Reducer = combineReducers({
    'todos':Todos,
    'filter':VisibilityFilter
})
export const Store = createStore(Reducer,loadState());

Store.subscribe((state)=>{
    saveState({todos:Store.getState().todos});
})