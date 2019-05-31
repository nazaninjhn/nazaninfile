import React from 'react'
import girl from './images/girl.png'
import validate from './validation/validateFunction'
import axios from 'axios'
import { withRouter } from 'react-router'
class Login3 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: null

    }
  }

  handleclick () {
    var EmailError = validate('email', this.state.email)
    var Emailpassword = validate('password', this.state.password)
    this.setState({ ...this.state, error: { ...this.state.error, email: EmailError, password: Emailpassword } })
    if (EmailError !== null || Emailpassword !== null) {
      console.log('errr', EmailError, Emailpassword)
      this.setState({ error: 'something went wrong' })
    } else {
      axios.post('https://api.paywith.click/auth/signin/', {
        email: this.state.email,
        password: this.state.password
      })
        .then((response) => {
          console.log('response', response)
          window.localStorage.setItem('token', response.data.data.token)
          window.localStorage.setItem('id', response.data.data.profile.id)
          this.props.history.push('./Massenger')
        })
        .catch((error) => {
          console.log('errrror', error)
        })
    }
  }

  render () {
    console.log('state', this.state.email)
    return (
      <div className='mother3'>

        <div className='container3'>
          <h1 className='login3'>Login</h1>
          <input className='inp3' placeholder='email' onChange={(e) => this.setState({ email: e.target.value })} />

          <input type='password' className='inp3' placeholder='password' onChange={(e) => this.setState({ password: e.target.value })} />
          {this.state.error != null && <p>{this.state.error}</p> }

          <button className='btn3' onClick={() => this.handleclick()}>Login</button>

        </div>

      </div>
    )
  }
}
export default withRouter(Login3)
