import counterReducer from './counterReducer'
//import loginReducer from './loginReducer'
import { combineReducers } from 'redux'
const allreducers = combineReducers({
    counter: counterReducer,
   
})

export default allreducers