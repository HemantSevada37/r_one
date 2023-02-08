// import React, { Component } from 'react'
// import './Nov9.css'

// export default class Nov9 extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       isTrue: false,
//     }
//   }
//   toggle = ()=>{
//     this.setState({isTrue: !this.state.isTrue})
//   }

//   render() {
//     return (
//       <div>
//         <h1 className={this.state.isTrue ? 'test' : ''}>Background color is changing</h1>
//         <button onClick={this.toggle}>Change</button>
//       </div>
//     )
//   }
// }



import React, { Component } from 'react'
import './Nov9.css'

  export default class Nov9 extends Component {
         constructor(props){
            super(props)
            this.state = {             
            currentCLass: 'black',         
          }     
        }     
        makeBlue =()=>{         
          this.setState({currentCLass:'Blue'})     
        }     
        makeGreen =()=>{         
          this.setState({currentCLass:'Green'})     
        }     
        makeRed =()=>{         
          this.setState({currentCLass:'Red'})     
        }   
        render() {     
          return (       
          <div>         
            <h1 className={this.state.currentCLass}>Adfar Rasheed</h1>         
            <button onClick={this.makeBlue}>Blue</button>         
            <button onClick={this.makeGreen}>Green</button>         
            <button onClick={this.makeRed}>Red</button>         
            <button className='black Green'>wdss</button>       
            </div>     
        )
  }
}
