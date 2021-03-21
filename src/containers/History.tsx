import { connect, RootStateOrAny } from 'react-redux';

import HistoryComponent from 'components/molecules/History';

const mapStateToProps = (state: RootStateOrAny) => ({
  list: state.tictactoe.list,
  score: state.tictactoe.score,
});

const History = connect(mapStateToProps)(HistoryComponent);

export default History;
