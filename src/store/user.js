import {action, observable} from 'mobx'

class UserStore {
  @observable name = 'me'

  @action changeName(name) {
    this.name = name
  }
}

export default UserStore
