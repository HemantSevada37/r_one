

// Example of uncontrolled event in RFC.....................................................................................
import React, { useRef } from 'react'

export default function Nov4b() {
    const inputRef = useRef() 
    function handleSubmit(){   
        alert(` Name : ${inputRef.current.value}`)  
        }   
        return (     
        <div>       
            <h3>Uncontrolled Components in RFC</h3>
            <form action="" onSubmit={handleSubmit}>         
                <label htmlFor="">Name :</label>
                <input type="text" ref={inputRef} name="name" />
                <button type='submit'>Submit</button>
            </form>
        </div>
)
}



// Example of uncontrolled event in RCC.............................................................................................
// import React, { Component } from 'react'

// export default class Nov4b extends Component {
//     constructor(){
//         super()
//         this.name = React.createRef()
//         this.password = React.createRef()
        
//       }
//       submitHandler(event){
//         event.preventDefault()
//         console.log(this.name.current.value, this.password.current.value)
//         console.log(`input in name is- ${this.name.current.value}`)
//         console.log(`input in password id - ${this.password.current.value}`)
//       }
    
//   render() {
//     return (
//       <div>
//         04 November part-2
//         <h1>Uncontrolled component in RCC</h1>       
//         <form action="" onSubmit={(event)=>{this.submitHandler(event)}}>         
//         <input type="text" placeholder='enter name' ref={this.name} /><br /><br />         
//         <input type="password" placeholder='Enter Password' ref={this.password} /><br /><br />
//         <button type='submit'>Submit</button>
//       </form>
        
//       </div>
//     )
//   }
// }



//....................................................................................................................................
// import React, { Component } from 'react'

// export default class Nov4b extends Component {
//     state={
//             firstName:'',
//             message:'',
//             key:'',
//         }

//     handleClick=(e)=>{      
//         this.setState({       
//             message:'welcome to the world of events'      
//         })   
//     }   
//     handleMouseMove=(e)=>{
//         this.setState({
//           message:'mouse is moving'
//         })
//     }
//     handlecopy=(e)=>{     
//         this.setState({      
//             message:'copying'     
//         })  
//     }   
//     handleKeyPress=(e)=>{     
//         this.setState({       
//             message:`${e.target.value} has been pressed and the keycode is` + e.charCode     
//         })   
//     }   
//     handleBlur=()=>{     
//         this.setState({       
//             message:"using blur"     
//         })   
//     }   
//     handleChange=(e)=>{    
//         this.setState({     
//             firstName:e.target.value,
//             message:e.target.value
//        })
//     }
    
//   render() {
//     return (
//         <div>         
//             04 November part-2
//             <h1>Welcome to the world of events</h1>         
//             <button onClick={this.handleClick}>Click Me</button><br/><br/>         
//             <button onMouseMove={this.handleMouseMove}>Move Mouse on me</button><br/>         
//             <p onCopy={this.handlecopy}>Check copy right permisioon by copying this text</p>         
//             <p>Action will show here - {this.state.message}</p>         
//             <label htmlFor="">Text for onKeypress Event:</label>         
//             <input type="text" onKeyPress={this.handleKeyPress} /><br/><br/>         
//             <label htmlFor="">Text for onBlur Event:</label>         
//             <input type="text" onBlur={this.handleBlur} /><br/>         
//             <div>  <br/>                 
//                 <label htmlFor=""> First Name:</label>           
//                 <input type="text" onChange={this.handleChange} name='firstname' value={this.state.value}/>          
//             </div>         
//             <div><br/>           
//                 <input type="submit" value="submit" />
//         </div>
//       </div>
//     )
//   }
// }
