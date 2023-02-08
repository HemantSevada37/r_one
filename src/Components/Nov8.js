// Life cycle method me Updating phase me render karna h ya nai
import React, { Component } from "react";

export default class Nov8 extends Component {
  constructor(props) {
    super(props);
    console.log("constructor method called");
    this.state = {
      firstName: "Hemant",
      day: 1,
      congratulations: "",
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate method called");
    console.log(nextState.day);
    if (nextState.day > 10) {
      return false;
    } else {
      return true;
    }
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("componentDidUpdate method called");
    if (prevState.day === 5) {
      // === ki jagah >= use krne per error deta hai...... ajeeb
      this.setState({
        congratulations: "Congrats",
      });
    }
  }
  change = () => {
    this.setState({
      day: this.state.day + 1,
    });
  };
  render() {
    console.log("render method called");
    return (
      <div>
        <h1>Life cycle methods - Updating phase - </h1>
        <h3>Day is {this.state.day}</h3>
        <button onClick={this.change}>Increase Day</button>
        <p>{this.state.congratulations}</p>
      </div>
    );
  }
}

// // life cycle method me mouting phase ke methods
// import React, { Component } from 'react'

// export default class Nov8 extends Component {
//     constructor(props){
//         super(props)
//         console.log("constructor method called");
//         this.state = {
//             firstName: 'Hemant',
//             lastName: 'sharma',
//         }
//     }
//     // static getDerivedStateFromProps(props, state){
//     //     console.log("getDerivedStateFromProps method called");
//     //     console.log(props);
//     //     console.log(state);
//     //     return {firstName: props.fName}
//     // }
//     componentDidMount(){
//         console.log("componentDidMount method called");
//         setTimeout(()=>{
//             this.setState({firstName : "Shivam"});
//         }, 4000);
//     }
//   render() {
//     console.log("render method called")
//     console.log(this.state);
//     return (
//       <div>
//         <h1>Life cycle methods - Mouting phase - </h1>
//         <h3>Result is - {this.state.firstName} {this.state.lastName}</h3>
//       </div>
//     )
//   }
// }

// // Controlled form components in class based components..........................................................
// import React, { Component } from 'react'

// export default class Nov8 extends Component {
//     constructor(){
//         super()
//         this.state={
//             name: '',
//             password : '',
//         }
//     }

//     submit = ()=>{
//         console.log(this.state.name, this.state.password);
//     }
//   render() {
//     return (
//       <div>
//         <h1>Controlled form component in RCC</h1>
//         <input type='text' placeholder='Enter name' onChange={(event)=>{this.setState({name : event.target.value})}} /><br/><br/>
//         <input type='password' placeholder='Enter password' onChange={(event)=>{this.setState({password : event.target.value})}} /><br/><br/>
//         <button onClick={this.submit}>Submit</button>
//       </div>
//     )
//   }
// }

// // uncontrolled form components in class based components..........................................................
// import React, { Component } from 'react'

// export default class Nov8 extends Component {
//     firstName = React.createRef();
//     lastName = React.createRef();
//     country = React.createRef();

//     handleSubmit = (e)=>{
//         e.preventDefault();
//         console.log(this.firstName.current.value);
//         console.log(this.lastName.current.value);
//         console.log(this.country.current.value);
//     }
//   render() {
//     return (
//       <div>
//         class on 8 November
//         <form onSubmit={this.handleSubmit}>
//             <input type='text' placeholder='Enter first name' ref={this.firstName} /><br/><br/>
//             <input type='text' placeholder='Enter Last name' ref={this.lastName} /><br/><br/>
//             <input type='text' placeholder='Enter country name' ref={this.country} /><br/><br/>
//             <button type='submit'>Submit</button>
//         </form>
//       </div>
//     )
//   }
// }
