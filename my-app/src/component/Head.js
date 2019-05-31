import React from 'react'
export default class Head extends React.Component {
  render () {
    console.log('propssddd:::', this.props)
    return (
      <div className='header'>
        <img className='im' src={this.props.user.avatar_url} />
        <span className='sp'>{this.props.user.email}</span>
      </div>
    )
  }
}
