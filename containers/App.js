import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Brainstorming from '../components/Brainstorming'
import * as IdeasActions from '../actions/ideas'

function mapStateToProps(state) {
  return {
    loading: state.ideas.loading,
    ideas: state.ideas
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(IdeasActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brainstorming)
