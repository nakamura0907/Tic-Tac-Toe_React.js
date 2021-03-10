import { createActions, handleActions } from 'redux-actions';

interface State {
  turnA: boolean;
  won: boolean;
  restart: number;
}

const initialState: State = {
  turnA: true,
  won: false,
  restart: 0,
};

export const Actions = createActions({}, 'CHANGE_TURN', 'changeWon', 'newGame');

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
    [Actions.newGame.toString()]: (state) => ({
      ...state,
      turnA: initialState.turnA,
      won: initialState.won,
      restart: state.restart + 1,
    }),
  },
  initialState,
);

export default tictactoe;
