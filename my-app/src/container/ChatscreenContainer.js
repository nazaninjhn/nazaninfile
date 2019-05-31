import { connect } from 'react-redux'
import Chatscreen from '../component/Chatscreen'
const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => {
  console.log(state)
  return {
    newMessage: state.newMessage,
    messages: state.messages,
    text: state.text
  }
}

const ChatScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatscreen)

export default ChatScreenContainer
