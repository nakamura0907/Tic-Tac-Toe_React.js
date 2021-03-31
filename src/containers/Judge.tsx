import { Actions } from 'modules/tictactoe';
import { connect, RootStateOrAny } from 'react-redux';
import { Dispatch } from 'redux';

import JudgeComponent from 'components/molecules/Judge';

const mapStateToProps = (state: RootStateOrAny) => ({
  turn: state.tictactoe.turn,
  won: state.tictactoe.won,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  newGame: () => dispatch(Actions.newGame()),
});

const Judge = connect(mapStateToProps, mapDispatchToProps)(JudgeComponent);

export default Judge;
