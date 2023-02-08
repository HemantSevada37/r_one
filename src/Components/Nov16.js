








//shared on 10:23 ......Using ajax......... this is code for html file 
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <button id="fetchBtn">Fetch Data</button>
//     <script>
//         let fetchBtn = document.getElementById('fetchBtn')
//         fetchBtn.addEventListener('click',buttonClickHandler)
//         function buttonClickHandler(){
//           let xhr = new XMLHttpRequest()
//           xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)
//         //   xhr.open('GET', 'adfar.txt', true)
//           //what to do when the response is ready
//           xhr.onload = function(){
//           if(this.status === 200){
//             let obj = JSON.parse(this.responseText)
//             console.log(obj)
//           }
//           else{
//             console.log("error")
//           }
//           }
//           xhr.send()
//         }
//     </script>
// </body>
// </html>





// shred on 10:25
// async componentDidMount(){
//     let url = "https://newsapi.org/v2/everything?q=tesla&from=2022-10-16&sortBy=publishedAt&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e";
//     let data = await fetch(url)
//     let parsedData = await data.json()
//     console.log(parsedData)
//     this.setState({articles:parsedData.articles  })
//   }




// try random joke api
// https://official-joke-api.appspot.com/random_joke




// shared on 10:45..............Using of Axios to fetch data.......................................................................
import  Axios  from 'axios'
import React from 'react'
import { useState } from 'react'


export default function App() {

  const [joke,setJoke] = useState("")
  const getJoke=()=>{

    Axios.get("https://official-joke-api.appspot.com/random_joke").then((response)=>{
      
      setJoke(response.data.setup + "...."+response.data.punchline)
    } )
  }
  
  return (
    <div>
      <button onClick={getJoke}>Get Joke</button>
      <h1>{joke}</h1>
      </div>
  )
}

