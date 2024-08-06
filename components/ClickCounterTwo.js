import React, { Component } from 'react'

class ClickCounterTwo extends Component {

    
  render() {
    const {count, increamentCount } = this.props
    return (
      <div>
        <button onClick={increamentCount}>Click {count} Times</button>
      </div>
    )
  }
}

export default ClickCounterTwo
