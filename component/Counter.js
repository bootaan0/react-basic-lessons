import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increament(){
    //    this.setState({
    //     count: this.state.count + 1
    //    }, () => {
    //     console.log('callback value', this.state.count)
    //    })

   this.setState((prevState) => ({
    count: prevState.count + 1
   }))
        console.log(this.state.count)
    }

    increamentFive(){
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
    }
    

  render() {
    return ( 
    <div>  <div>Count - {this.state.count} </div>
    <button onClick={() => this.increamentFive()}>Increament</button>
     </div>
    )
  }
}

export default Counter
