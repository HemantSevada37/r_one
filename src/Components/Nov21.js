
// // shared on 9:52............. Eaxmple 1 of Custom hook............................................................................
// import React from 'react'
// import useNov21CustomHook from './useNov21CustomHook'

// export default function Nov21() {
//   const {count, increment, decrement} = useNov21CustomHook();
//   // console.log(count, increment, decrement);

//   // we can call hook many times and use it for different counter
//   const {count:c, increment:inc} = useNov21CustomHook();

//   return (
//     <div>
//       November 21
//       <h1>{count}</h1>
//       <button onClick={increment}>Add</button>
//       <button onClick={decrement}>Sub</button>
//       <br/><br/>

//       {/* // we can call hook many times and use it for different counter */}
//       <h1>{c}</h1>
//       <button onClick={inc}>Add</button>

//     </div>
//   )
// }






// shared on 10:35................... Eaxmple 2 of Custom hook...........................................................................

import React, { useState } from 'react'
import useNov21CustomHook from './useNov21CustomHook'

export default function App() {
 const [item,setItem] = useState("")
 const {list,push,pull} = useNov21CustomHook()
 const onSubmitHandler=(event)=>{
  event.preventDefault();
  push(item)
  setItem("")
 }
  return (
    <div>
      <header>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="">Add Item </label>
          <input type="text" onChange={(event)=>{setItem(event.target.value)}} value={item}/>
          <button type='submit' >Submit</button>
        </form>
        {list.map((listitem, index)=>{
          return <li key={index}>{listitem}
         <br/> <button onClick={()=>{pull(index)}}> Remove</button></li>
        })}
      </header>
      
      </div>
  )
}















// // Shared on 11:3 .........Lazy loading, suspanse etc............................................
// import React,{Suspense,lazy} from 'react'
// const Name =lazy(()=>import('./Name'))
// const Bittu =lazy(()=>import('./Bittu'))

// export default function App() {
//   return (
//     <div>
//       <h1>App Component</h1>

//       <Suspense fallback={<div>please wait...</div>}>
//         <Name/>  
//       </Suspense>

//       <Suspense fallback={<div>Paaji thand rakh</div>}>
//         <Bittu/>
//       </Suspense>
//     </div>
//   )
// }








// // code for mock of shubham madhesiya
// import React, { useState } from 'react'

// export default function Nov21() {
//   const [state, setState] = useState({
//     value1: "",
//     value2 : ""
//   })
//   const fun= (event, type)=>{
//     if(type === 'one'){
//       setState({value1: (Number)(event.target.value),
//         value2: (Number)(event.target.value)+1});
//     }else{
//       setState({value1: (Number)(event.target.value)-1,
//         value2: (Number)(event.target.value)});
//     }
//   }
//   return (
//     <div>
//       <label>Input 1 </label>
//       <input type='number' onChange={(e)=>{fun(e, 'one')}} value={state.value1}/>
//       <br/><br/>
//       <label>Input 2 </label>
//       <input type='number' onChange={(e)=>{fun(e, 'two')}} value={state.value2}/>
//     </div>
//   )
// }


