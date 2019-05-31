export const addNewMessage = (newMessage) => ({
  type: 'SAVE_NEW_MESSAGE',
  payload: newMessage
})
export const saveConversationList = (conversationList) => ({
  type: 'SAVE_CONVERSATION_LIST',
  payload: conversationList
})
export const ShowingNewDetails = (response, user, conversationid) => ({
  type: 'ShowNewDetails',
  payload: response,
  user: user,
  conversationid: conversationid

})
export const SaveConv = (conversationid) => ({
  type: 'SaveConv',
  payload: conversationid
})
