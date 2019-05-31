import React from 'react'
import './App.css'
import Login2 from './component/login2'
import SignUp from './component/Signup'
import Chat from './component/chatpage'
import Login3 from './component/Login3'
import { createStore } from 'redux'
import Profile from './component/Profile'
import conversation from './reducer/conversation'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Massenger from './component/Massenger'
const store = createStore(conversation)
export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path='/' component={Login2} />
          <Route path='/Signup' component={SignUp} />
          <Route path='/Chat' component={Chat} />
          <Route path='/Massenger' component={Massenger} />
          <Route path='/Login3' component={Login3} />
          <Route path='/profile' component={Profile} />

        </Router>
      </Provider>
    )
  }
}
