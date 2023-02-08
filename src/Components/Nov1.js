import React from 'react'

export default function Nov1(props) {
  return (
    <div>
      01 November
      {header}
      <PropsFun fName='Kunal' lName="Sharma"/>
      <h1>Printing name using props - {props.name}</h1>
      <Skills arr={["html", "css", "js"]}/>
    </div>
  )
}

// creating a variable to style elemets
// it's a object
const styleVar = {
      color : 'red',
      backgroundColor :'#61dbfb',
      border:'2px #333 solid'
  };

const varElement = "giving innerText using variale";

// creating a variable header
const header = (
    <>
        <h1 style={{color : "blue", backgroundColor :'#999'}}>Creating a variable and using it and exporting it</h1>
        <p style={styleVar}>Using variable style</p>
        <h3>{varElement}</h3>
    </>
);




// importing of function and using this.
// import OneNov from './Components/OneNov';
// <OneNov/> 


// importing of variable and using this.
// import {OneNov} from './Components/OneNov';
// {OneNov} 

const PropsFun = (props)=>{
  console.log(props);
  return (
    <>
      <h1> My name is {props.fName}</h1>
      <h2>{props.lName}</h2>
    </>
  )
}

// Using array with props
const Skills = (props)=>{
  let skillSet = props.arr.map((i)=>{
    return <li>{i}</li>;
  });
  return <ul>{skillSet}</ul>;
}