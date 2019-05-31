import React from 'react'
import boss from './images/boss.png'
import axios from 'axios'
export default class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      lastname: '',
      mybio: '',
      number: ''

    }
  }
  handlechange (e) {
    var name = e.target.name
    this.setState({ [name]: e.target.value })
  }
  handlerequest () {
    const fdata = new FormData()
    let mytoken = window.localStorage.getItem('token')
    fdata.append('token', mytoken)
    fdata.append('descripzation', this.state.mybio)
    fdata.append('phone_number', this.state.number)
    fdata.append('name', this.state.name)
    axios.post('https://api.paywith.click/auth/profile/', fdata)

      .then((response) => {
        console.log('response', response)
      })
      .catch((error) => {
        console.log('errrror', error)
      })
  }

  render () {
    return (
      <div className='profile'>
        <div className='profilecontaner'>
          <div className='headerprofile'>
            <div className='profileimg'>
              <img src={boss} />
            </div>
            <div className='helperprofile'>
              <input className='inputprofile' placeholder='name' name='name' onChange={(e) => this.handlechange(e)} />
              <input className='inputprofile' placeholder='lastname' name='lastname' onChange={(e) => this.handlechange(e)} />
            </div>
          </div>
          <div className='middleprofile'>
            <input className='inputprofile' placeholder='my bio' name='mybio' onChange={(e) => this.handlechange(e)} />

          </div>
          <div className='endprofile'>
            <input className='inputprofile' placeholder='change number' name='number' onChange={(e) => this.handlechange(e)} />
            <button className='btprofile'> LogOut</button>
            <button className='btprofile' onClick={() => this.handlerequest()}> set</button>

          </div>
        </div>
      </div>
    )
  }
}
