import { createActions, handleActions } from 'redux-actions';

interface State {
  turnA: boolean;
  won: boolean;
}

const initialState: State = {
  turnA: true,
  won: false,
};

export const Actions = createActions({}, 'CHANGE_TURN', 'changeWon');

const tictactoe = handleActions(
  {
    [Actions.changeTurn.toString()]: (state) => ({
      ...state,
      turnA: !state.turnA,
    }),
    [Actions.changeWon.toString()]: (state) => ({
      ...state,
      won: true,
    }),
  },
  initialState,
);

export default tictactoe;
