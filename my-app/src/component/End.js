import React from 'react'
import paper from './images/paper.png'
import { addNewMessage } from '../action/conversation'
import axios from 'axios'
export default class End extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: '',

      messages: [ ]

    }
  }
  handlechange (e) {
    var Name = e.target.name
    this.setState({ [Name]: e.target.value })
  }
  sendnewMessage () {
    this.props.dispatch(addNewMessage(this.state.message))
    this.setState({ newMessage: '' })
  }
  sending () {
    console.log('conversaaaation', this.props.conversationid)
    let token = window.localStorage.getItem('token')
    const gdata = new FormData()
    gdata.append('token', token)
    gdata.append('conversation_id', this.props.conversationid)
    gdata.append('text', this.state.message)

    axios.post('https://api.paywith.click/conversation/create/', gdata)

      .then((response) => {
        this.props.dispatch(addNewMessage(this.state.message))
      })
      .catch((error) => {
        console.log('errrror', error)
      })
  }

  render () {
    return (
      <div className='end'>

        <input className='inp' placeholder='write massege' name='message' onChange={(e) => this.handlechange(e)} value={this.state.message} />
        <img className='paper' src={paper}
          onClick={() => this.sending()} />

      </div>)
  }
}
