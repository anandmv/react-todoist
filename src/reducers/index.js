import {combineReducers,createStore} from 'redux';

import VisibilityFilter from './VisibilityFilter';
import Todos from './Todos';

const Reducer = combineReducers({
    'todos':Todos,
    'filter':VisibilityFilter
})

export const Store = createStore(Reducer);