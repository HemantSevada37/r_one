
import React from 'react'

export default function Nov2() {
    
  return (
    <div>
      02 November
      <Header d={data}/>
      <Btn fun={hey}/>
      <ClassBased d={data}/>
      <ul>
        <Numbers numbers={arr}/>
      </ul>
      <div>
        <h1>Skills Level</h1>
        <Comp2 num={skills}/>
      </div>
      <ul>
        <Person arr={persons}/>
      </ul>
        
    </div>
  )
}


// Very important
// this is how we use array of Objects
const persons = [
        {
            id : 1,
            name :'Adfar',
            age : 25,
            skill : 'React'
        },
        {
            id : 2,
            name : 'Piyush',
            age : 25,
            skill : 'Java'
        },         
        {             
            id : 3,             
            name : 'Sonam',             
            age : 27,             
            skill : 'javaScript'         
        },         
        {             
            id : 4,             
            name : 'Sandeep',             
            age : 22,             
            skill : 'HTML'
         }     
            ] 

const Person = ({arr})=>{
    const personList = arr.map((e)=>{
        return (<Each key={e.id} per={e}/>)
    })
    return personList;
}
const Each = ({per : {id, name, age, skill}})=>{
    return (<li>`My name is {name} and {age} old`</li>)
}




// this is how we use 2-D Array
const skills = [   
    ['HTML',10],
    ['Css',7],
    ['JavaScript', 9],
    ['React',8] ];

const Comp1 = ({rename:[tech,level]}) => (
        <li>{tech} {level}</li>
    )

const Comp2 = ({num}) => {
       const skillList = num.map((element)=><Comp1 rename={element}/>)
       return <ul>{skillList}</ul>
}



// direct passing props.numbers as parameter
const arr = [1, 2, 3, 4, 5];
const Numbers = ({numbers})=>{
    return numbers.map((x)=><li>{x}</li>);
}



// Using props in class based Components . class don't receive arguments
// so we use this keyword to acess props
class ClassBased extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.d.id}</h1>
                <h3>{this.props.d.name}</h3>
            </div>
        )
    }
}



// passing a function as props and using it with onClick events
const hey = ()=>{
    alert("Saying Hey!! ");
}
const Btn = (props)=>{
    return (
        <button onClick={props.fun}>Click Me</button>
    )
}

// using function with passing a parameter
// const hey = (h)=>{
//     alert(`Saying Hey!! ${h}`);
// }
// const Btn = (props)=>{
//     return (
//         <button onClick={(e)=>props.fun("hemant")}>Click Me</button>
//     )
// }


// passing a Object as props and using object's key-values
const data = {
    id : 1,
    name :'Adfar',
    age : 25,
    skill : 'React'
}
const Header = (props)=>{
    return (
        <header>
            <h3>{props.d.id}</h3>
            <h1>{props.d.name}</h1>
        </header>
    )
}
