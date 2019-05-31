import React from 'react'
import Chat from './chatpage'
import ConversationListContainer from '../container/conversationListContainer'
export default class Massenger extends React.Component {
  render () {
    return (
      <div className='massengerscreen'>
        <ConversationListContainer />
        <Chat />
      </div>
    )
  }
}
