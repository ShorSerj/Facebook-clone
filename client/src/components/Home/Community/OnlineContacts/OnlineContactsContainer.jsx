import OnlineContacts from './OnlineContacts'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    onlineContactsData: state.homePages.communityBlock.onlineContactsData,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

const OnlineContactsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OnlineContacts)

export default OnlineContactsContainer
