import { createActions, handleActions } from 'redux-actions';

interface State {
  list: string[]; // 勝利履歴
  score: {
    playerA: number;
    playerB: number;
  };
  turn: 'playerA' | 'playerB';
  won: boolean;
  restart: number;
}

const initialState: State = {
  list: [],
  score: {
    playerA: 0,
    playerB: 0,
  },
  // turn: 'playerA' as 'playerA',  Line 20:23:  Expected a `const` instead of a literal type assertion  @typescript-eslint/prefer-as-const
  turn: 'playerA' as const,
  won: false,
  restart: 0,
};

const messages = {
  playerA: 'Aの勝ち',
  playerB: 'Bの勝ち',
};

export const Actions = createActions({}, 'CHANGE_TURN', 'changeWon', 'newGame');

const tictactoe = handleActions(
  {
    [Actions.changeTurn.toString()]: (state) => ({
      ...state,
      turn:
        state.turn === 'playerA' ? ('playerB' as const) : ('playerA' as const),
    }),
    [Actions.changeWon.toString()]: (state) => ({
      ...state,
      list: [...state.list, messages[state.turn]],
      score: { ...state.score, [state.turn]: state.score[state.turn] + 1 },
      won: true,
    }),
    [Actions.newGame.toString()]: (state) => ({
      ...state,
      turn: initialState.turn,
      won: initialState.won,
      restart: state.restart + 1,
    }),
  },
  initialState,
);

export default tictactoe;
