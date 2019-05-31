import { connect } from 'react-redux'
import Conversation from '../component/Conversation'
const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => {
  console.log(state)
  return {
    conversationList: state.conversationList
  }
}
const ConversationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation)

export default ConversationContainer
