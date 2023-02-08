// rfc me state change karna with hook, useState ...............................................
import React, { useDebugValue, useState } from 'react'

export default function Nov3() {
    
    const [myStyle, setmyStyle] = useState({
        // myStyle is the current state
        // these are the initial property of myStyle
        padding : "30px",
        color: "black",
        backgroundColor: "white",
        border : "1px #333 solid"
    })
    const [btnText, setbtn] = useState("Turn Text Color White");

    const toggle = ()=>{
        if(myStyle.color === "white"){
            setmyStyle({
                color: "black",
                backgroundColor: "white"
            })
            setbtn("Turn Text Color white");
        }else{
            setmyStyle({
                color: "white",
                backgroundColor: "black"
            })
            setbtn("Turn Text Color black");
        }
    }
  return (
    <div>
      03 November
        <div>Ternary Operator- Welcome {isOutput ? 'Back' : 'Front'}</div>
        <div style={myStyle}>Using state in rfc, with hook useState</div>
        <button onClick={toggle}>{btnText}</button>
    </div>
    
  )
}
// jitni baar bhi button per click krenge, toggle function chalgea,
// toggle function ki working ke according myStyle ko change kar dega
// myStyle me jo change hoga vo automatically reflect ho jayega.


let isOutput = true;





// // class based component se state change karna, setState method use krna...................

// import React, { Component } from 'react'

// export default class Nov3 extends Component {
//     constructor(props){
//         super(props)
//         // this.state = {attribute: value}
//          this.state = {
//             count : 0
//          }
//     }

//     addOne = ()=>{
//         this.setState({count : this.state.count+1})
//     }

//   render() {
//     const c = this.state.count;
//     return (
//       <div>
//             03 November
//             <h1>{c}</h1>
//             <button onClick={this.addOne}>Add One</button>
//             <button onClick={()=>this.setState({count : this.state.count-1})}>Minus One</button>
//             <button onClick={()=>this.setState({count : 0})}>Reset</button>
//       </div>
//     )
//   }
// }
