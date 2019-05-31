
const INIT = {
  newMessage: '',
  messages: [],
  conversationList: [],
  user: {},
  myId: window.localStorage.getItem('id'),
  conversationid: '',
  text: ''

}
var myId = window.localStorage.getItem('id')
function conversation (state = INIT, action) {
  console.log('action', action)
  switch (action.type) {
    case 'SAVE_NEW_MESSAGE':
      console.log('myidd', myId)
      return { ...state,
        newMessage: action.payload,
        messages: [...state.messages, { sender: { id: myId }, text: action.payload }]
      }
    case 'SAVE_CONVERSATION_LIST':
      return { ...state,
        conversationList: action.payload
      }
    case 'ShowNewDetails':
      console.log('actiooooon', action.user)
      return { ...state,
        messages: action.payload,
        user: action.user,
        conversationid: action.conversationid
      }

    default:
      return state
  }
}

export default conversation
