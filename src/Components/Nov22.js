
// //shared on 10:15................Eaxmple of Error Boundary....................................
// // Error boundry child component tree me jo error aati hai uske according apne UI ko
// // change kar leta hai. jis part me error aati hai wahi part effect hota hai.
// // baki component normally render karte hai.

// import React from 'react'
// import Nov22Counter from './Nov22Counter'
// import Nov22ErrorBoundry from './Nov22ErrorBoundry'

// export default function Nov22() {
//   return (
//     <div>
//       <h1>To see the working of Error Bondry click on the number</h1>
//       <Nov22ErrorBoundry>
//         <Nov22Counter/>
//         <Nov22Counter/>
//       </Nov22ErrorBoundry>
//       <Nov22ErrorBoundry>
//         <Nov22Counter/>
//       </Nov22ErrorBoundry>
//       <Nov22ErrorBoundry>
//         <Nov22Counter/>
//       </Nov22ErrorBoundry>
    
//     </div>

//   )
// }






// Shared on 10:54.......................
import React from 'react'
import { useState } from 'react'

export default function Nov22() {

  const [name,setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn,setIsloggendin] = useState(true)

  const login = (e)=>{
    e.preventDefault()
    console.log(name,email,password)
    const userData = {
      name,
      email,
      password,
    }
    localStorage.setItem('info',JSON.stringify(userData))
    setIsloggendin(false)
    setName('')
    setEmail('')
    setPassword('')
  }

  const logout=()=>{
    localStorage.removeItem('info')
    setIsloggendin(true)
  }


  return (
    <div style={{textAlign:"center"}}>
      <h1>This is Adfar's React</h1>
      {isLoggedIn ? (
         <>
         <form action="">
          <input value={name} placeholder="Enter Name" type="text" onChange={(e)=>setName(e.target.value)} /><br/><br/>
          <input type="email" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} /><br/><br/>
          <input type="password" value={password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
          <button type='submit' onClick={login}>Login</button>
          </form>
          </>
      ):(
        <>
        <h1>User is Logged In</h1>
        <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  )
}


  
