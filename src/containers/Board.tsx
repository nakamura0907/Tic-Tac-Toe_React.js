import { Actions } from 'modules/tictactoe';
import { connect, RootStateOrAny } from 'react-redux';
import { Dispatch } from 'redux';

import BoardComponent from 'components/molecules/Board';

const mapStateToProps = (state: RootStateOrAny) => ({
  turnA: state.tictactoe.turnA,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeTurn: () => dispatch(Actions.changeTurn()),
});

const Board = connect(mapStateToProps, mapDispatchToProps)(BoardComponent);

export default Board;
