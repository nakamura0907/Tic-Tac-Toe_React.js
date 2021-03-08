import { connect, RootStateOrAny } from 'react-redux';

import JudgeComponent from 'components/molecules/Judge';

const mapStateToProps = (state: RootStateOrAny) => ({
  turnA: state.tictactoe.turnA,
  winner: state.tictactoe.winner,
});

const Judge = connect(mapStateToProps)(JudgeComponent);

export default Judge;
