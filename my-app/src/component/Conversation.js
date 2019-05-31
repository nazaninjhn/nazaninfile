import React from 'react'
import boss from './images/boss.png'
import axios from 'axios'
import { ShowingNewDetails } from '../action/conversation'
import { SaveConv } from '../action/conversation'
export default class Conversation extends React.Component {
  showingdetails () {
    const sdata = new FormData()
    let token = window.localStorage.getItem('token')
    sdata.append('token', token)
    sdata.append('conversation_id', this.props.conversationid)
    sdata.append('size', 10)
    sdata.append('date', Math.floor(new Date().getTime() / 1000))

    axios.post('https://api.paywith.click/conversation/details/', sdata)

      .then((response) => {
        console.log('response2222', response, this.props.user)
        this.props.dispatch(ShowingNewDetails(response.data.data.messages, this.props.user, this.props.conversationid))
        // this.props.dispatch(SaveConv(this.props.conversationid))
      })
      .catch((error) => {
        console.log('errrror', error)
      })
  }

  render () {
    return (
      <div className='conv' onClick={() => this.showingdetails()}>
        <div className='profilecontainer'>
          <img className='s' src={this.props.avatar} />

        </div>

        <div className='contentcontainer'>
          <div className='inf'>
            <sapn>{this.props.name}</sapn>
            <span className='pd'>{this.props.date}</span>
          </div>
          <div className='inf' style={{ textAlign: 'center' }}>
            <span>{this.props.latestMessage}</span>

          </div>

        </div>
      </div>
    )
  }
}
