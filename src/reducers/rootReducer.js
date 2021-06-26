import { combineReducers } from 'redux';
import { reducer as exampleReducer } from './exampleReducer';

const rootReducer = combineReducers({
  exampleReducer,
});

export default rootReducer;
