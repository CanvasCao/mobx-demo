import TodoStore from './todo.js'
import UserStore from './user.js'
const todoStore = new TodoStore()
const userStore = new UserStore()

const stores = {
  todoStore,
  userStore,
}

export default stores

