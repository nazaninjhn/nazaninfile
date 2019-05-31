import React from 'react'

export default class login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''

    }
  }
  handlechange (e) {
    console.log(e.target.value)
    this.setstate({ email: e.target.value })
  }
  handleclick () {
    console.log(this)
  }

  render () {
    return (
      <div className='App'>

        <border className='myborder'>
          <h2 />
          sign in to yahoo Mail
          <br />
          <input classname='myinput' placeholder='enter your email' value={this.state.email}
            onChange={(e) => { this.handlechange(e) }} />
          <hr />
          <br />
          <input placeholder='password' value={this.state.password} />
          <button
            className='submit'
            onClick={() => { this.handleclick() }}
          >Next</button>
          <br />
          <a className='mylink' href='http://localhost:3000/'>trouble signing in?</a>

          <br />
          <button classname='submit'>creat account</button>
        </border>

      </div>
    )
  }
}
