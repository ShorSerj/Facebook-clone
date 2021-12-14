import Discussion from './Discussion'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    discussionData: state.homePages.communityBlock.discussionData,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

const DiscussionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Discussion)

export default DiscussionContainer
