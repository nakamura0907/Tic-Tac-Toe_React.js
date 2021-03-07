import { combineReducers } from 'redux';
import tictactoe from 'modules/tictactoe';

const reducers = combineReducers({
  tictactoe,
});

export default reducers;
