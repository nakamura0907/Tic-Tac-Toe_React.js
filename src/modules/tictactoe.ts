import { createActions, handleActions } from 'redux-actions';

interface State {
  turnA: boolean;
}

const initialState: State = {
  turnA: true,
};

export const Actions = createActions({}, 'CHANGE_TURN');

const tictactoe = handleActions(
  {
    [Actions.changeTurn.toString()]: (state) => ({
      ...state,
      turnA: !state.turnA,
    }),
  },
  initialState,
);

export default tictactoe;
