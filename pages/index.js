import React from 'react'
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Login from '../components/login'

export default class Counter extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    console.log(store)
    return { isServer }
  }

  constructor (props) {
    super(props)
    this.store = initStore(props.isServer, props.lastUpdate)
  }

  render () {
    return (
      <Provider store={this.store}>
        <Login />
      </Provider>
    )
  }
}