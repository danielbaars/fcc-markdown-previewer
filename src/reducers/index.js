import { combineReducers } from 'redux';
import InputReducer from './reducer_input';

const rootReducer = combineReducers({
  input: InputReducer
});

export default rootReducer;
