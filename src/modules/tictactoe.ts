import { createActions, handleActions } from 'redux-actions';

interface State {
  turnA: boolean;
  winner: boolean;
}

const initialState: State = {
  turnA: true,
  winner: false,
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
