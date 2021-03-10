import { connect, RootStateOrAny } from 'react-redux';

import HistoryComponent from 'components/molecules/History';

const mapStateToProps = (state: RootStateOrAny) => ({
  turnA: state.tictactoe.turnA,
  won: state.tictactoe.won,
});

const History = connect(mapStateToProps)(HistoryComponent);

export default History;
