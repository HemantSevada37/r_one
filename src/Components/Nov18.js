
// storing and removing data into local storage with button click
import React from 'react'
import { useState } from 'react'

export default function Nov18() {
  const [name,setName] = useState('')
  const [pwd,setPwd] = useState('')
  const handle = ()=>{
    localStorage.setItem('Name',name)
    localStorage.setItem('Password',pwd)
  }
  const remove =()=>{
    localStorage.removeItem('Name')
    localStorage.removeItem('Password')
  }
  return (
    <>
    <div>
      November 18 
      <h1>User's Name</h1>
      <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <h1>Enter Password</h1>
      <input type="password" placeholder='Password' value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
    </div>
    <div>
      <button onClick={handle}>Done</button>
    </div>
    <div>
      <button onClick={remove}>Remove</button>
    </div>
    </>
  )
}

