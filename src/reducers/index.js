import { combineReducers } from 'redux';
import quotes from './quotes';
import uuid from 'uuid';


const rootReducer = combineReducers({
  quotes
})

export default rootReducer
