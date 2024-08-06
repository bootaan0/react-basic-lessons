import React, { Component, useState } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Salaam Walaal'
      }
    //   this.ClickHandler = this.ClickHandler.bind(this)
    }

    ClickHandler = () =>{
        this.setState({
            message: 'good bye'
        })
    } 

    // ClickHandler(){
    //     this.setState({
    //         message: 'Alxamdulillaah Walaal nabad. adigu see tahay'
    //     })
    //     console.log(this);
    // }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.ClickHandler.bind(this)}>Click </button> */}
        {/*   fat Arrow exmple*/} 
        {/* <button onClick={() => this.ClickHandler()}>Click </button> */}
        <button onClick={this.ClickHandler}>Click </button>
      </div>
    )
  }
}

export default EventBind
