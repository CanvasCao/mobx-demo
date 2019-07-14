import * as React from 'react'
import {observable, computed} from 'mobx'
import {observer} from 'mobx-react'

@observer
class App extends React.PureComponent {
  onChangeMixedBtnClick = () => {
    this.props.store.changeMixed()
  }

  onPushArrayClick = () => {
    this.props.store.pushArray()
  }

  render() {
    return (
      <>
        <div> mixed{this.props.store.mixed}</div>
        <button onClick={this.onChangeMixedBtnClick}>CHANGE MIXED</button>

        <div>-----------------------------------</div>
        <div>{
          this.props.store.array.map((ele) => {
            return <div>{ele}</div>
          })
        }</div>
        <button onClick={this.onPushArrayClick}>PUSH ARRAY</button>
      </>
    )
  }
}

export default App
