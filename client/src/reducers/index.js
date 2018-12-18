import { combineReducers } from 'redux';
import blogs from './blogs';
import nextID from "./nextID"

const rootReducer = combineReducers({
  blogs,
  nextID,
});

export default rootReducer;