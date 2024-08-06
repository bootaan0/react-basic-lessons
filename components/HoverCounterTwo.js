import React, { Component } from 'react'

class HoverCounterTwo extends Component {

  render() {
    const {count, increamentCount} = this.props
    return (
      <div>
        <h1 onMouseOver={increamentCount}>Hovered {count} Times</h1>
      </div>
    )
  }
}

export default HoverCounterTwo
