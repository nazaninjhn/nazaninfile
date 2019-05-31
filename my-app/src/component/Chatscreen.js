import React from 'react'
export default class Chatscreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: [],
      myId: window.localStorage.getItem('id')
    }
  }
  render () {
    return (
      <div className='screen'>
        {this.props.messages.map((item, index) => {
          console.log('itemdateeee', item.date)
          if (item.sender.id == this.state.myId) {
            return (
              <div className='sender'>
                <span className='message'>{item.text}</span>
                <span className='date'> {item.date}</span>
              </div>
            )
          } else {
            return (
              <div className='receiver'>
                <span className='message'>{item.text}</span>
              </div>
            )
          }
        }
        )

        }
      </div>
    )
  }
}
