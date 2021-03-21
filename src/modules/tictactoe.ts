import { createActions, handleActions } from 'redux-actions';

interface State {
  list: string[]; // 勝利履歴
  score: {
    playerA: number;
    playerB: number;
  };
  turnA: boolean;
  won: boolean;
  restart: number;
}

const initialState: State = {
  list: [],
  score: {
    playerA: 0,
    playerB: 0,
  },
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
      list: state.turnA
        ? [...state.list, 'Aの勝ち']
        : [...state.list, 'Bの勝ち'],
      score: state.turnA
        ? {
            ...state.score,
            playerA: state.score.playerA + 1,
          }
        : {
            ...state.score,
            playerB: state.score.playerB + 1,
          },
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
