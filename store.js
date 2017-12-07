import { action, observable, computed } from 'mobx'

let store = null

class User {

	@observable token = ""

	constructor (isServer) {
  }

  @action saveToken = (token) => {
  	this.token = token
  }

  @action getToken = () => {
  	return this.token
  }
}

export function initStore (isServer) {
  if (isServer) {
    return new User(isServer)
  } else {
    if (store === null) {
      store = new User(isServer)
    }
    return store
  }
}
