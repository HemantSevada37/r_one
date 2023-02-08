



// //shared on 10:14
// let sum = 0;
// const loop = (n)=>{
//     for(let i = 0;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// const memoize = (x)=>{
//     let memory = {}
    
//     return function(...args){
//         let n = args[0]
//         if(n in memory){
//             console.log("Adfar")
//             console.log(memory)
//            return  memory[n]
//         }
//         else{
            
//             console.log("Bittu")
//             let result = x(n)
//             memory[n]=result
//             return result
            
//         }
//     }
// }
// console.time()
// const efficient = memoize(loop)
// console.log(efficient(5))
// console.timeEnd()

// console.time()

// console.log(efficient(5))
// console.timeEnd()

// // // try for higher numbers like 1000 etc




// // shred on 10:52
// // using of hook useMemo......................................................................
// import React from 'react'
// import { useMemo } from 'react'
// import { useState } from 'react'

// export default function Memo() {
//     const [counterOne,setcounterOne] = useState(0)
//     const [counterTwo,setcounterTwo] = useState(0)

//     const IncrementOne = ()=>{
//         setcounterOne(counterOne+1)
//     }
//     const IncrementTwo = ()=>{
        
//         setcounterTwo(counterTwo+1)
        
//     }
   
//     const isEven=useMemo(()=>{
//          console.log("Adfar")
//          let i = 0;
//          while(i<2000000000) i++;
//         return counterOne%2===0
//     },[counterOne])

//   return (
//     <div>
//       <button onClick={IncrementOne}>Counter + {counterOne}</button>
//       <p>{isEven?'Even':'ODD'}</p>
//       <button onClick={IncrementTwo}>Counter + {counterTwo}</button>

//     </div>
//   )
// }



