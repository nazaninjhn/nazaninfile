import React from 'react'
import axios from 'axios'
import validate from './validation/validateFunction'
import { Link } from 'react-router-dom'

class Login2 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: {
        email: null,
        password: null

      }
    }
  }
  handlechange (e) {
    console.log('value', e.target.value)
    var name = e.target.name
    this.setState({ [name]: e.target.value })
  }
  handleclick () {
    var Erroremail = validate('email', this.state.email)
    var Errorpassword = validate('password', this.state.password)
    this.setState({ ...this.state, error: { ...this.state.error, email: Erroremail, password: Errorpassword } })
    axios.post('https://api.paywith.click/auth/signin/', {
      email: this.state.email,
      password: this.state.password
    })
      .then(function (response) {
        console.log('response', response)
        window.localStorage.setItem('token', response.data.data.token)
      })
      .catch(function (error) {
        console.log('errrror', error)
      })
  }

  render () {
    return (
      <div className='mother'>
        <div className='oldchild'>

          <h1 >login</h1>

          <input className='child1' placeholder='email' name='email'onChange={(e) => this.handlechange(e)} />

          <i class='fas fa-envelope' />
          {this.state.error.email != null && <p>{this.state.error.email}</p>}
          <br />
          <input className='child2' placeholder='password' name='password'
            onChange={(e) => this.handlechange(e)} />
          <i class='fas fa-unlock' />
          {this.state.error.password != null && <p>{this.state.error.password}</p>}
          <br />
          <button className='bt' onClick={() => this.handleclick()} >login</button>
          <br />
          <Link
            className='link'
            to='./Signup'
          >
        Signup
          </Link>
        </div>
      </div>
    )
  }
}
export default Login2
