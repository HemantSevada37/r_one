// // Example of useReducer hook
// import React from 'react'
// import { useReducer } from 'react'
// const initialState = 0;
// const reducer = (state,action) =>{
//     switch(action){
//         case "add":
//             return state+1;
//         case "sub":
//             return state-1;
//         case "reset":
//             return 0
//         default:
//             throw new Error("Unexpected action")
//         }
//     }
//     export default function App() {
//         const [count,dispatch]= useReducer(reducer, initialState )
//         return (
//             <div>
//                 <h2>{count}</h2>
//                 <button onClick={()=>{dispatch("add")}}>Add</button>
//                 <button onClick={()=>{dispatch("sub")}}>Sub</button>
//                 <button onClick={()=>{dispatch("reset")}}>Reset</button>
//                 <button onClick={()=>{dispatch("error")}}>Error</button>
//             </div>
//     )
// }

// // Example of useReducer hook
// import React from 'react'
// import { useReducer } from 'react'

// const counterReducer=(state,action)=>{
//     console.log("state",state)
//     console.log("Action", action)
//     if(action.type==="Adfar"){
//         return {...state,
//             count: state.count+1
//         }
//     }
//     else if(action.type==="Himanshu"){
//         return{...state,
//             count : state.count-1
//         }
//     }
//     return state
// }
// export default function App() {
//     const [state,dispatch] = useReducer(counterReducer,{count:0, value:10})

//   return (
//     <div>
//         <p>{state.count}</p>
//         <p>{state.value}</p>
//       <button onClick={()=>{dispatch({type:"Adfar"})}}>Add</button>

//       <button onClick={()=>{dispatch({type:"Himanshu"})}}>Sub</button>
//     </div>
//   )
// }

// // How to use CreateContext
// //Code in Comp1.js
// import React from 'react'
// import { createContext } from 'react'
// import Comp2 from './Comp2'

// const FirstName = createContext()
// const LastName = createContext()
// const MiddleName = createContext()

// export default function Comp1() {
//   return (
//     <div>
//       <FirstName.Provider value={"Piyush"}>
//         <LastName.Provider value={"Singh"}>
//             <MiddleName.Provider value={"Raj"}>
//                 <Comp2/>
//             </MiddleName.Provider>
//         </LastName.Provider>
//       </FirstName.Provider>
//     </div>
//   )
// }
// export {FirstName, LastName,MiddleName}

// // Code in Comp2
// import React from 'react'
// import Comp3 from './Comp3'

// export default function Comp2() {
//   return (
//     <div>
//       <Comp3/>
//     </div>
//   )
// }

// // Code in Comp3
// import React from 'react'
// import Comp4 from './Comp4'

// export default function Comp3() {
//   return (
//     <div>
//       <Comp4/>
//     </div>
//   )
// }

// // Code in Comp4
// import React from 'react'
// import { FirstName, LastName, MiddleName } from './Comp1'

// export default function Comp4() {
//   return (
//     <div>
//       <FirstName.Consumer>
//         {(fName)=>{
//             return  (<LastName.Consumer>
//                 {(lName)=>{
//                     return (<MiddleName.Consumer>
//                             {(mNAme)=>{
//                                 return <h1>I am {fName} {mNAme} {lName}</h1>
//                             }}
//                             </MiddleName.Consumer>)
//                         }}
//                 </LastName.Consumer>)
//             }}
//         </FirstName.Consumer>
//     </div>
//   )
// }

// // Code in Comp4
// // in case of using hook useContext, code in comp4 will change but
// // code in comp1 will remain same

// import React from 'react'
// import { FirstName, LastName, MiddleName } from './Comp1'
// import { useContext } from "react";

// export default function Comp4() {
//     const fname = useContext(firstName);   // using hook useContext
//     const lname = useContext(lastName);
//     return (
//             <div>
//                     {fname}
//                     {lname}
//             </div>
//   )
// }
