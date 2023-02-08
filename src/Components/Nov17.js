

// Using Router ...............................................................................
import React from 'react'
import {BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import Nov17About from './Nov17About'
import Nov17Contact from './Nov17Contact'
import Nov17ContactChild from './Nov17ContactChild'
import Nov17Home from './Nov17Home'

export default function Nov17() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Nov17Home/>}/>
            <Route path='about' element={<Nov17About/>}/>
            <Route path='/contact' element={<Nov17Contact/>}>
              <Route path='child' element={<Nov17ContactChild/>}/>
              <Route path='child2' element={<Child2/>} />
            </Route>
            <Route path='inner' element={<div>Rendering inner div</div>} />
            <Route path='users/:userId' element={<TestParam/>} />
            <Route path="*" element={<ErrorPage/>} />
    
        </Routes>
      </BrowserRouter>
       {/* <Nov2/> */}
    </div>
  )
}



// nested child of contact component
const Child2 = ()=>{
  return (<div>this is 2nd child of Contact</div>)
}

const TestParam = ()=>{
  // using hook useParams to get to user input url and id etc.
  // we can acess data of users/anything
  // but can't acess this type data users/anything/something
  const param = useParams();
  const id = param.userId;
  return (
        <>
        <div>Testing Param, work for any link</div>
        <h1>showing details of {id}</h1>
        </>)
}


// make seperate page for error message
const ErrorPage = ()=>{
  return (<div>Error Page, No Page found, Error 404</div>)
}











// api fetch karna in hook useEffect....................................................................................................
// import React, { useEffect, useState } from 'react'

// export default function Nov17() {
//     const [joke, setJoke] = useState({
//         title: '',
//         punchline: ''
//     })

//     // const jokeFunction = async ()=>{
//     //     const url = "https://official-joke-api.appspot.com/random_joke";
//     //     const response = await fetch(url);
//     //     const parsedData = await response.json();
//     //     console.log(parsedData);
//     //     setJoke({
//     //         title : parsedData.setup,
//     //         punchline: parsedData.punchline
//     //     })
//     // }

//     // same funtion but different way to fetch data
//     const jokeFunction = ()=>{
//         const url = "https://official-joke-api.appspot.com/random_joke";
//         fetch(url).then((r)=>r.json()).then((res)=>{
//             console.log(res);
//             setJoke({
//                 title : res.setup,
//                 punchline: res.punchline
//             })
//         })
//     }

//     useEffect(()=>{
//         jokeFunction();
//     },[]) // empty array [] is very necessary, without this, page will render again and again

//     // // another way to write hook useEffect
//     // useEffect(jokeFunction,[]) 

//   return (
//     <div>
//       November 17
//         <h1>{joke.title}</h1>
//         <h1>{joke.punchline}</h1>
//     </div>
//   )
// }
