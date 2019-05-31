import { connect } from 'react-redux'
import Conversationlist from '../component/Conversationlist'
const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => {
  console.log(state)
  return {
    conversationList: state.conversationList,
    user: state.user
  }
}
const ConversationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversationlist)

export default ConversationListContainer
