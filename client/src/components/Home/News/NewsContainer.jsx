import News from './News'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    newsData: state.homePages.newsData,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News)

export default NewsContainer
