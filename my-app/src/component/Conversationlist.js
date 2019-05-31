import React from 'react'
import Conversation from './Conversation'
import axios from 'axios'
import { saveConversationList } from '../action/conversation'
import ConversationContainer from '../container/ConversationContainer'
import { SaveConv } from '../action/conversation'
import search from './images/search.png'
export default class Conversationlist extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conversationlist: [],
      myId: window.localStorage.getItem('id'),
      token: window.localStorage.getItem('token'),
      suggestedUsers: [],
      diagnose: false
    }
    this.handleRequest = this.handleRequest.bind(this)
  }
  componentDidMount () {
    this.handleRequest()
  }

  handleRequest () {
    const token = window.localStorage.getItem('token')
    axios.get('https://api.paywith.click/conversation/', {
      params: {
        token: token

      }
    })
      .then(response => {
        this.props.dispatch(saveConversationList(response.data.data.conversation_details))
      })
      .catch(error => {
        console.log('1111111111', error)
      })
  }
  handlechange (e) {
    const fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('query', e.target.value)
    fdata.append('size', 4)
    axios.post('https://api.paywith.click/explore/search/contacts/', fdata)

      .then((response) => {
        console.log('response', response)
        this.setState({ suggestedUsers: response.data.data.users })
      })
      .catch((error) => {
        console.log('errrror', error)
      })
  }
  modalpage () {
    if (this.state.diagnose == false) {
      this.setState({ diagnose: true })
    } else {
      this.setState({ diagnose: false })
    }
  }
  createconversation (e, user) {
    console.log('userrrr', user)
    const cdata = new FormData()
    cdata.append('token', this.state.token)
    cdata.append('user_id', user.id)

    axios.post('https://api.paywith.click/conversation/', cdata)

      .then((response) => {
        console.log('response', response)
      })
      .catch((error) => {
        console.log('errrror', error)
      })
  }

  render () {
    console.log('props:::::', this.props.conversationList)
    return (
      <div className='d1'>
        <div>
          <img className='serachimg' src={search} onClick={() => this.modalpage()} />
          {this.state.diagnose == true &&
          <div className='modal'>
            <div className='entermodal'>
              <input className='search' placeholder='type a name'
                onChange={(e) => this.handlechange(e)} />
              { this.state.suggestedUsers.map((user, index) => {
                return (
                  <p className='suggest'
                    onClick={(e) => this.createconversation(e, user)}
                  ><img src={user.avatar_url} className='suggestedAvatar' /> {user.email}  </p>
                )
              })

              }

            </div>

          </div>}

          <input className='search' placeholder='type a name'
            onChange={(e) => this.handlechange(e)} />

        </div>
        { this.props.conversationList.map((conversation, index) => {
          console.log('inja chi?')
          return (
            conversation.users.map((user, idx) => {
              if (user.id !== this.state.myId) {
                console.log('injaaa')
                console.log('conversation222', conversation.id)
                return (
                  <ConversationContainer
                    key={index}
                    name={user.email}
                    date={conversation.latest_message_date}
                    latestMessage={conversation.latest_message}
                    avatar={user.avatar_url}
                    conversationid={conversation.id}

                    user={user}

                  />
                )
              }
            })
          )
        }
        )

        }
      </div>
    )
  }
}
