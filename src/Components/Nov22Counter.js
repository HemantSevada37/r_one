import React, { Component } from 'react'

export default class Nov22Counter extends Component {
    constructor(props){
        super(props)
        this.state= {
            counter: 0
        }
    }
    handleClick = ()=>{
        this.setState({
            counter: this.state.counter+1
        })
    }
  render() {
    if(this.state.counter === 5){
        throw new Error("Error occured in Counter component");
    }
    return (
      <div>
        <h1 onClick={this.handleClick}>{this.state.counter}</h1>
      </div>
    )
  }
}



// // binding this to a function
// constructor(props){
//     super(props)
//     this.state= {
//         counter: 0
//     }
//     this.handleClick = this.handleClick.bind(this);
// }
// handleClick(){ // in this case we can not acess this keyword
//     this.setState({
//         counter: this.state.counter+1
//     })
// }

// // to acess this we need to bind this with handleClick or......
// // we can make arrow function to handleClick