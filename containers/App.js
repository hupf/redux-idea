import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Brainstorming from '../components/Brainstorming'
import * as BrainstormingActions from '../actions/brainstorming'

function mapStateToProps(state) {
  return {
    brainstorming: state.brainstorming
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BrainstormingActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Brainstorming)
