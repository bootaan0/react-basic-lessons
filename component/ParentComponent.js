import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         ParentName: 'parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.ParentName} from ${childName}`)
    }
    

  render() {
    return (
      <div>
        <ChildComponent  greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
