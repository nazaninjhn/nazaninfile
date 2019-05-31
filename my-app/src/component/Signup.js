import React from 'react'
import axios from 'axios'
export default class Signup extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      repassword: '',
      error: null

    }
  }
  handlechange (e) {
    var name = e.target.name
    this.setState({ [name]: e.target.value })
    console.log('state', this.state.password)
  }
  handleClick () {
    if (this.state.password === this.state.repassword) {
      axios.post('https://api.paywith.click/auth/signup/', {
        email: this.state.email,
        password: this.state.password
      })
        .then(function (response) {
          console.log('response', response)
          window.localStorage.setItem('token', response.data.token)
          window.localStorage.setItem('id', response.data.id)
        })
        .catch(function (error) {
          console.log('errrror', error)
        })
    } else {
      this.setState({ error: 'password and repassword dose not match' })
    }
  }

  render () {
    return (
      <div className='mother3'>

        <div className='container3'>
          <h1 classname='signup3'> sign up</h1>

          <input className='inp3' placeholder='email' name='email' onChange={(e) => this.handlechange(e)} />

          <br />
          <input className='inp3' placeholder='password' type='password' name='password' onChange={(e) => this.handlechange(e)} />
          <br />

          <input className='inp3' placeholder='repassword' type='password' name='repassword' onChange={(e) => this.handlechange(e)} />
          <br />
          <button className='btn3'
            onClick={() => this.handleClick()}

          > sign up</button>
          {this.state.error != null && <p>{this.state.error}</p>}

        </div>
      </div>

    )
  }
}
