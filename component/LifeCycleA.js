import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Bootaan'
      }
      console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDrivedStateFromProps')
        return null 
    }
    
componentDidMount(){
    console.log('LifeCycleA componentDidMount')
}

shouldComponentUpdate(){
 console.log("LifeCycleA shouldComponentUpdate")
 return true
}

getSnapshotBeforeUpdate(prevProps, prevState){
  console.log("LifeCycleA getSnapshotBeforeUpdate")
  return null
}

componentDidUpdate(){
  console.log("LifeCycleA componentDidUpdate")

}

ChangeState = () => {
  this.setState({
    name: 'CodeEvolution'
  })
}


  render() {
    console.log('LifeCycleA render')
    return (
        <div>
      <div>LifeCycle A</div>
      <button onClick={this.ChangeState}>Change State </button>
      <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
