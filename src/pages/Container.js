import * as React from 'react'
import {observer, inject} from 'mobx-react'

@inject('todoStore', 'userStore')
@observer
class Header extends React.PureComponent {
  onChangeNameClick = () => {
    this.props.userStore.changeName(Math.random())
  }

  onAddTodoClick=()=>{
    this.props.todoStore.addTodo(Math.random())
  }

  render() {
    const {todoStore, userStore} = this.props
    return (
      <>
        <div>{userStore.name}</div>
        <div>{
          todoStore.todos.map((todo, index) => {
            return <div key={index}>{todo.name}</div>
          })
        }</div>
        <button onClick={this.onChangeNameClick}>CHANGE NAME</button>
        <button onClick={this.onAddTodoClick}>ADD TODO</button>
      </>
    )
  }
}

export default Header
