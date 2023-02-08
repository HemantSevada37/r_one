

// import React, { useState } from 'react' 
// import { useEffect } from 'react'  
// export default function FunctionEffect() {     
//     let [count,setCount]= useState(0)
              
//     useEffect(()=>{         
//         console.log("Hi of function")         
//         const eventHandler=()=>console.log("hello")         
//         document.addEventListener("click",eventHandler);  
        
//         // useEffect will return a cleanup function.      
//         return ()=>{             
//             console.log("HEllo ADFAR")             
//             document.removeEventListener("click",eventHandler)         
//         }     
//     },[count])    

//             return (     
//                 <div>       
//                     <h1>{count}</h1>
//                     <button onClick={()=>setCount(count-1)}>Update</button><br /><br />
//                 </div>
//     )
// }
















// // use of useEffect hook
// import React, { useState } from 'react' 
// import { useEffect } from 'react'  
// export default function FunctionEffect() {     
//     let [count,setCount]= useState(0)     
//     let [name,setName]= useState("Piyush")  

//     useEffect(()=>{         
//         console.log("Hi of function")     
//     },[count, name])     
//         useEffect(()=>{         
//             console.log("dghhgsc")     
//         },[name])   

//             return (     
//             <div>       
//                 <h1>{count}</h1>       
//                 <button onClick={()=>setCount(count-1)}>Update</button><br /><br />       
//                 <h1>{name}</h1>       
//                 <button onClick={()=>setName("Adfar")}>Change</button>
//             </div>
//     )
// }
















// import React from 'react'
// import { useState } from 'react'  

// export default function Nov10() {
//     const obj = {
//         name: "Adfar",
//         age: 25,
//         isYoung : true
//     }
//     const [person, setPerson] = useState(obj)

//     const changePerson = ()=>{
//         // setPerson((x)=>{
//         //     return {...x, name: 'Piyush'}
//         // })

//         setPerson({...person, name: 'Piyush'});

//         // setPerson({
//         //     name: "Piyush",
//         //     age: 32,
//         //     isYoung: false
//         //     // yaha se ek bhi property hatane per kuch bhi show nai karega
//         // })
//     }

//   return (
//     <div>
//         10 November
//       <h1>{person.name}</h1>
//       <h2>{person.age}</h2>
//         <h3>{person.isYoung.toString()}</h3> {/*boolean value ko string me convet krte hai */}
//         <button onClick={changePerson}>Click me</button>
//     </div>
//   )
// }








// // Using Array as a state in useState
// import React from 'react' 
// import { useState } from 'react'  

// export default function Nov10() {     
//     let num = [1,33,4,5,6,3]     
//     const [numbers,setNumbers] = useState(num)      
//     let changeList=()=>{                     
//         setNumbers(x=>{ //setState callback function receive prev state as parameter and must return new state            
//             // return [...x, 98]
//             return [...x, Math.floor(Math.random()*50)]
//         })
//       } 
// return (
// <div>{numbers.map((n,i) => <li key = {i}> {n}</li>)}
// <button onClick={changeList}>CLick me</button></div>

// )
// }
