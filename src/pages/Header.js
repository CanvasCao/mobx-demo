import * as React from 'react'
import {observer, inject} from 'mobx-react'

@inject('userStore', 'todoStore')
@observer
class Header extends React.PureComponent {
  onChangeNameClick = () => {
    this.props.userStore.changeName(Math.random())
  }

  onAddTodoClick = () => {
    this.props.todoStore.addTodo(Math.random())
  }

  render() {
    const userStore = this.props.userStore
    return (
      <>
        <div>{userStore.name}</div>
        <button onClick={this.onChangeNameClick}>CHANGE NAME</button>
        <button onClick={this.onAddTodoClick}>ADD TODO</button>
      </>
    )
  }
}

export default Header
