import { connect } from 'react-redux'
import End from '../component/End'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})
const mapStateToProps = state => {
  console.log(state)
  return {
    conversationid: state.conversationid

  }
}

const Footercontainer = connect(
  mapStateToProps,

  mapDispatchToProps

)(End)

export default Footercontainer
