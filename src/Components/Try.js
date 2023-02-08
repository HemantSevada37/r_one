



// Todo app with update feature using single state
import React, { useState } from 'react'
const Try = () => {
    const [todo, setTodo] = useState({
        text: '',
        arr: [],
        x: '',
        flag: true
    })

    const clickHandler=()=>{
        console.log(todo.text)
        setTodo({...todo, arr: [...todo.arr, todo.text], text:''});
    }

    const deleteElement=(index)=>{
        setTodo({...todo, arr: (todo.arr.filter((e, i)=>{
            return (i !==index)
        }))});
      
    }

    const updateElement=(index)=>{
        setTodo({...todo, x: index, text: todo.arr[index], flag: false});

    }

    const updateHandler=()=>{
        setTodo({...todo, arr: todo.arr.map((e, i)=>{
            if(i === todo.x) return todo.text;
            else return e;
        }), text : '', flag: true})

    }
    console.log(todo);
  return (
    <div>
      <input type="text" value={todo.text} onChange={(e)=>setTodo({...todo, text: e.target.value})} />
      <br/>
      {todo.flag ? <button onClick={clickHandler}>Add</button>
        : <button onClick={updateHandler}>Updates</button>
    }
      <ol>{todo.arr.map((e, i)=>{
        return <li key={i}>{e}
            <br/><button onClick={()=>{deleteElement(i)}}>Delete</button>
            <button onClick={()=>{updateElement(i)}}>Update</button>
        </li>
        })}
        </ol>
    </div>
  )
}

export default Try


// Todo app with update feature...........................................................
// import React, { useState } from 'react'

// const Try = () => {
//     const [text, setText] = useState("");
//     const [state, setState] = useState([]);
//     const [x, setx] = useState();
//     const [flag, setFlag] = useState(true);

//     const clickHandler=()=>{
//         setState([...state, text]);
//         setText('');
//     }

//     const deleteElement=(index)=>{
//         setState(state.filter((e, i)=>{
//             return (i !==index)
//         }))
//     }

//     const updateElement=(index)=>{
//         setx(index);
//         setText(state[index]);
//         setFlag(false);
//     }

//     const updateHandler=()=>{
//         setState(state.map((e, i)=>{
//             if(i ===x) return text;
//             else return e;
//         }))
//         setText('');
//         setFlag(true);
//     }
//   return (
//     <div>
//       <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
//       <br/>
//       {flag ? <button onClick={clickHandler}>Add</button>
//         : <button onClick={updateHandler}>Updates</button>
//     }
//       <ol>{state.map((e, i)=>{
//         return <li key={i}>{e}
//             <br/><button onClick={()=>{deleteElement(i)}}>Delete</button>
//             <button onClick={()=>{updateElement(i)}}>Update</button>
//         </li>
//         })}
//         </ol>
//     </div>
//   )
// }

// export default Try











// import React, { useEffect, useState } from "react";
// // import "../styles/App.css";

// var colors = [
//   '#16a085',
//   '#27ae60',
//   '#2c3e50',
//   '#f39c12',
//   '#e74c3c',
//   '#9b59b6',
//   '#FB6964',
//   '#342224',
//   '#472E32',
//   '#BDBB99',
//   '#77B1A9',
//   '#73A857'
// ];

// const Try = () => {
//     const [state, setState] = useState({
//         text: '',
//         author: ''
//     })
//     const [click, setClick] = useState(true);

//     useEffect(()=>{
//         const url = "https://api.quotable.io/random";
//         fetch(url).then((r)=>r.json()).then((res)=>{
//             setState({
//                 text: res.content,
//                 author: res.author
//             })
//         })
//     }, [click])
    

//     return (
//       <div id="main">
//         <div id="wrapper">
//           <div id="quote-text">{state.text}</div>
//           <div id="quote-author">{state.author}</div>
//           <button id="new-quote" onClick={()=>{setClick(!click)}}>New</button>
//         </div>
//       </div>
//     );
// };

// export default Try;












// import React, {Component, useState} from "react";
// // import '../styles/App.css';

// class Try extends Component {
//     constructor(props) {
// 		super(props);
//         this.state = {
//             value: false
//         }
// 	};

//     handleClick = ()=>{
//         this.setState({
//             value: true
//         })
//     }

//     render() {
//     	return(
//     		<div id="main">
//                 <button id="click" onClick={this.handleClick}>Click</button>
// 				{this.state.value && <p id="para">
//                 Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
//                     </p>}
//     		</div>
//     	);
//     }
// }


// export default Try;


















// import React from 'react'
// import { useEffect } from 'react'

// export default function Try() {
//     const [state, setState] = useEffect(false)
//   return (
//     <div>
//         another way to write if else in return method
//        {!state && (
//         <Comp1 />
//        )}
//        {state && (
//         <Comp2 />
//        )}
//     </div>
//   )
// }






// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';

// const Try = () => {
//   const [data, setData] = useState()

//   useEffect(()=>{
//     console.log("effect running")
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     fetch(url).then((r)=>r.json()).then((res)=>{setData(res)});
//   },[])

//   return (
//     <div>
//       {data && <table>
//         <thead>
//           <th>Title</th>
//           <th>Body</th>
//         </thead>
//         <tbody>
//         {data.map((e, i)=>{
//           return (
//             <tr id={i}>
//               <td>{e.title}</td>
//               <td>{e.body}</td>
//             </tr>
//           )
//         })}
//         </tbody>
//       </table>}

//     </div>
//   )
// }

// export default Try



















// // Mock question by Suraj mall
// import React from 'react'
// import { useState } from 'react'

// const Try = () => {
//     const [input, setInput] = useState("");
//     const [data, setData] = useState([]);

//     const handleAdd = ()=>{
//         if(input){
//             setData([...data, input]);
//         }
//         console.log(data);
//     }
//     const handleDelete= (index)=>{
//         let newArr = data.filter((d, i)=>i!==index);
//         setData([...newArr]);
//     }
//   return (
//     <div>
//       <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} /><br/><br/>
//       <button onClick={handleAdd}>Add Task</button>
//       <button onClick={(e)=>{setInput("")}}>Clear</button>
//       <br/><br/>
//       <div>
//         {data.map((d, ind)=>{
//             return (
//                 <>
//                     <p>{d}</p>
//                     <button onClick={()=>{handleDelete(ind)}}>Delete</button>
//                 </>
//             )
//         })}
//       </div>
//     </div>
//   )
// }

// export default Try





// // code for shubham madhesiya 3rd problem................
// import { useEffect, useState } from 'react';

// function App() {
//   const url = "https://jsonplaceholder.typicode.com/albums/";
//   const [state, setState] = useState([]);
//   const [input, setInput] = useState('');

//   useEffect(()=>{
//     console.log("useEffect in running");
//     fetch(url).then((r)=>r.json()).then((res)=>{setState(res)});
//   }, [input])
  
//   return (
//     <div>Mocks<br/>
//       <input style={inputStyle} type='text' onChange={(e)=>{setInput(e.target.value)}} value={input} />
//     <div style={con}>{state.map((e)=>{
//       if(e.title.includes(input)){
//         return(<p style={pStyle}>{e.title}</p>)
//       }
//     })}</div>
//     </div>
//   );
// }

// export default App;

// const inputStyle = {
//   width: '195px'
// }
// const con = {
//   border: '1px #999 solid',
//   width: '200px',
//   maxHeight: '400px',
//   overflowY: 'scroll'
// }
// const pStyle= {
//   borderBottom : '1px #bbb solid'
// }





