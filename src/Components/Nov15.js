
// // //shared on 10:54..............................................................................................................
// // API ki tarah data render krna
// import React, { Component } from 'react'
// import Nov15Child1 from './Nov15Child1'

// export default class Nov15 extends Component {

//   constructor(props){
//     super(props)
//     this.state = {
//         articles: []
//     }
//   }
//   // componentDidMount(){
//   //   const url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e";
//   //   fetch(url).then((r)=>r.json())
//   //   .then((res)=>{this.setState(this.state.articles = res.articles)});

//   // }

//   // another way of code using async and await
//   async componentDidMount(){
//     const url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e";
//     let r = await fetch(url);
//     let res = await r.json();
//     this.setState(this.state.articles = res.articles);
//   }

//   render() {
//   return (
//   <div className='container my-3  '>
//     <h2>AdfarNews - TopHeadlines</h2>
//     <div className='row'>
//         {this.state.articles.map((element)=>{
//             return <div className="col-md-3" key={element.url}>
//               <Nov15Child1 title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
//             </div>
//         })}
//     </div>
//   </div>
//   )
//   }
// }









// //shared on 10:04............................................................................................................................
// // another example of Hook useCallback................................
// import React from 'react'
// import { useCallback } from 'react'
// import { useState } from 'react'
// const x = new Set()
// export default function App() {
//   const [count,setCount] = useState(0)
//   const [number, setNumber]= useState(0)

//   const Increment=useCallback(()=>{
//     setCount(count+1)
//   },[count])
//   const Decrement=useCallback(()=>{
//     setCount(count-1)
//   },[count])
//   const IncreamentNumber=useCallback(()=>{
//     setNumber(number+1)
//   },[number])

//   x.add(Increment)
//   x.add(Decrement)
//   x.add(IncreamentNumber)

//   console.log(x.size)
//   // console.log(x);
//   console.log("adfar")

//   return (
//     <div>
//          <h1>Count : {count}</h1>
//          <button onClick={Increment}>Increase count</button>
//          <button onClick={Decrement}>Decrease count</button>
//          <button onClick={IncreamentNumber}>Increase Number :{number}</button>
//     </div>
//   )
// }
















// // in this example fun is wriiten using hook useCallback............................................................................
// // fun ke dependent on counterTwo
// // when counterOne is changed, Child element will not rerender
// // when counterTwo is changes, Chikd element will rerender

// import React, { useCallback, useState } from 'react'
// import Nov15Child1 from './Nov15Child1'

// export default function Nov15() {
//   const [counterOne, setCounterOne] = useState(0);
//   const [counterTwo, setcounterTwo] = useState(0);

//   const incrementOne = ()=>{
//     setCounterOne(counterOne+1);
//   }
//   const incrementTwo = ()=>{
//     setcounterTwo(counterTwo+1);
//   }
//   const fun= useCallback(()=>{
//     console.log("function fun")
//   }, [counterTwo])

//   return (
//     <div>
//       <button onClick={incrementOne}>count is : {counterOne}</button>
//       <button onClick={incrementTwo}>count is : {counterTwo}</button>
//       <Nov15Child1 fun={fun}/>
//     </div>
//   )
// }







// // in this example child component Nov15Child1 is render...........................................................................................
// // every time we click on button and increment our count value
// // to stop this we can use memo in child component
// // memo use krne ke baad child component tabhi render hoga jab child componenet me
// // koi change krenge

// // BUT if we pass a function fun to child component as props then memo
// // will not work and child will render again and again

// import React, { useState } from 'react'
// import Nov15Child1 from './Nov15Child1'

// export default function Nov15() {
//   const [count, setCount] = useState(0);

//   const increment = ()=>{
//     setCount(count+1);
//   }
//   const fun=()=>{
//     console.log("function fun")
//   }

//   return (
//     <div>
//       <button onClick={increment}>count is : {count}</button>
//       <Nov15Child1 fun={fun}/>
//     </div>
//   )
// }



