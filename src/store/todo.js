import {action, computed, observable} from 'mobx'

class Todo {
  constructor(name) {
    this.name = name
    this.finished = false
  }

  // say() {
  //   return '我的名字叫' + this.name + '今年' + this.age + '岁了'
  // }
}

class TodoStore {
  @observable todos = [new Todo('a'), new Todo('b')]

  @computed get notFinishedTodo() {
    return ths.todos.filter((todo) => {
      return !todo.finished
    }).length
  }

  @action addTodo(name) {
    this.todos.push(new Todo(name))
  }
}

export default TodoStore
