import React, { Component } from 'react'
import Input from './Input'

 class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }

    ClickHandler = () => {
        this.componentRef.current.focusInput()
    }
    
  render() {
    return (  
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.ClickHandler}>Focus Input</button>
      </div>
    ) 
  }
}

export default FocusInput
