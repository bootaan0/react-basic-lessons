import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         Islogging: true
      }
    }
    
  render() {

    // && calamada maxa la odhan jirey raadi
    // Example 4 only statement true sow something
    // short circut operator
    return this.state.Islogging && <div>Welcome Bootaan</div>

    //example three ternary oprator in react 
    // return this.state.Islogging ? (
    //     <div> Welcome Bootaan </div>
    // ) : (
    //     <div> Welcome Guest </div>
    // )


    // Example One Element Variable  
    // let message 
    // if (this.state.Islogging){
    //     message = <div> Welcome Bootaan </div>
    // }else {
    //     message = <div> Welcome Guest </div>
    // }

    // return <div>{message}</div>

    // example two if/else statement
    // if(this.state.Islogging){
    //     return (
    //         <div> Welcome Bootaan </div>
    //     )
    // } else {
    //     return (
    //         <div> Welcome Guest </div>
    //     )
    // }
    // return (
    //   <div>
    //    <div> Welcome Bootaan </div>
    //    <div> Welcome Guest </div>
    //   </div>
    // )

    
  }
}

export default UserGreeting
