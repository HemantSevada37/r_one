// import React, { useState } from 'react'

// export default function Nov4() {
//   const [text, setText] = useState("")
//   const onChangee = (event)=>{
//     console.log("onchangee clicked");
//     setText(event.target.value)
//   }
//   const onUpper=()=>{
//     let upper = text.toUpperCase();
//     setText(upper)
//   }
//   const onLower=()=>{
//     let lower = text.toLowerCase();
//     setText(lower)
//   }
//   const onClear=()=>{
//     setText("");
//   }
//   const onCopy=()=>{
//     var mytext = document.getElementById("tex");
//     mytext.select()
//     mytext.setSelectionRange(0, 999);
//     navigator.clipboard.writeText(mytext.value)

//     //other way to do alomost same working
//     // var mytext = text;
//     // console.log(mytext);
//     // navigator.clipboard.writeText(mytext)
//   }
//   return (
//     <div>
//       04 November
//       <br/><br/>
//       <label htmlFor='' className='form-label'>Example Text area</label>
//       <textarea id='tex' className='form-control' onChange={onChangee} rows="9"
//           value={text} placeholder="Enter your text here">This text don't display</textarea>
//       <button onClick={onUpper} className='btn btn-primary my-3 mx-3'>Upper</button>
//       <button onClick={onLower} className='btn btn-primary my-3 mx-3'>Lower</button>
//       <button onClick={onClear} className='btn btn-primary my-3 mx-3'>Reset</button>
//       <button onClick={onCopy} className='btn btn-primary my-3 mx-3'>Copy Text</button>
//     </div>
//   )
// }



// same thing with class based component.................Home Work.......................................
import React, { Component } from 'react'

export default class Nov4 extends Component {
  constructor(props){
    super(props)
    this.state = {
      myText : ""
    }
  }

  onChangee=(event)=>{
    console.log("onchangee clicked");
    this.setState({myText : event.target.value})
  }

  onUpper=()=>{
    let modifiedText = this.state.myText.toUpperCase();
    this.setState({myText : modifiedText})
  }
  onLower=()=>{
    let modifiedText = this.state.myText.toLowerCase();
    this.setState({myText : modifiedText})
  }
  onClear=()=>{
    this.setState({myText : ""})
  }
  onCopy=()=>{
    let modifiedText = this.state.myText;
    navigator.clipboard.writeText(modifiedText)
  }

  render() {
    const text = this.state.myText;
    return (
      <div>
        04 November
        <br/><br/>
        <label htmlFor='' className='form-label'>Example Text area</label>
        <textarea id='tex' className='form-control' onChange={this.onChangee} rows="9"
            value={text} placeholder="Enter your text here">This text don't display</textarea>
        <button onClick={this.onUpper} className='btn btn-primary my-3 mx-3'>Upper</button>
        <button onClick={this.onLower} className='btn btn-primary my-3 mx-3'>Lower</button>
        <button onClick={this.onClear} className='btn btn-primary my-3 mx-3'>Reset</button>
        <button onClick={this.onCopy} className='btn btn-primary my-3 mx-3'>Copy Text</button>
      </div>
    )
  }
}
