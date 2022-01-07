import Social from './Social'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    storeData: state.homePages.storeData,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

const SocialContainer = connect(mapStateToProps, mapDispatchToProps)(Social)

export default SocialContainer
