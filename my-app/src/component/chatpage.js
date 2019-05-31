import React from 'react'
import ChatScreenContainer from '../container/ChatscreenContainer'
import HeaderContainer from '../container/HeaderContainer'
import Footercontainer from '../container/Footercontainer'

class Chat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: '',

      messages: [],
      myId: window.localStorage.getItem('id')

    }
  }
  handlechange (e) {
    var Name = e.target.name
    this.setState({ [Name]: e.target.value })
  }
  render () {
    console.log('state', this.state.message)
    return (
      <div className='main'>
        <HeaderContainer />
        <div className='middle'>
          <ChatScreenContainer />

        </div>
        <Footercontainer />
      </div>
    )
  }
}
export default Chat
