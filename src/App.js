// import React, { useState } from 'react'
// // import '../styles/app.css'

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [gender, setGender] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [userName, setUserName] = useState('');
//   const [nameError, setNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [phoneNumberError, setPhoneNumberError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [emptyError, setEmptyError] = useState('');
//   const [genderError, setGenderError] = useState('');

//   const resetErrorDefault = ()=>{
//     setNameError("");
//     setPasswordError('');
//     setPasswordError("");
//     setEmailError("");
//     setEmailError("");
//     setGenderError("");
//   }
//   const validate = ()=>{
//     if(name === '' || email === '' || gender === "" || phoneNumber === '' || password=== ''){
//       setEmailError('All fields are mandatory');
//       setUserName('');
//       return false;
//     }
//     if(!name.match(/^[A-Za-z0-9- ]+$/)) {
//       setNameError('Name is not alphanumeric');
//       setUserName('');
//       return false;
//     }
//     if(!email.includes('@')){
//       setEmailError('email must contain @');
//       setUserName('');
//       return false;
//     }
//     if(!gender.match(/male|female|others/i)){
//       setGenderError('Please identify as male, female or others');
//       setUserName('');
//       return false;
//     }
//     if(!phoneNumber.match(/^[0-9]+$/)){
//       setPhoneNumberError('Phone Number must contain only numbers');
//       setUserName('');
//       return false;
//     }
//     if(password.length < 6){
//       setPasswordError('Password must contain atleast 6 letters');
//       setUserName('');
//       return false;
//     }
//     return true;
//   }
//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     resetErrorDefault();
//     const isValid = validate();
//     if(isValid){
//       setName('');
//       setEmail('');
//       setGender('');
//       setPhoneNumber('');
//       setPassword('');
//       resetErrorDefault();

//       setUserName(email.substr(0, email.indexOf('@')));
//     }
//   }

// return (
//   <div className="App">
//     <form onSubmit={handleSubmit}>
//       <input data-testid='name' type='text' placeholder="name" value={name} onChange={(e)=> setName(e.target.value)} ></input>
//       <span>{nameError}</span>
//       <input data-testid='email' type='text' placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)} ></input>
//       <span>{emailError}</span>
//       <select data-testid='gender' name="gender" value={gender} onChange={(e)=> setGender(e.target.value)}>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//         <option value="other">Other</option>
//       </select>
//       <span>{genderError}</span>
//       <input data-testid='phoneNumber' type='text' placeholder="phone Number" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} ></input>
//       <span>{phoneNumberError}</span>
//       <input data-testid='password' type='password' placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)} ></input>
//       <span>{passwordError}</span>
//       <span>{emptyError}</span>
//       <input type='submit' data-testid='submit' value='submit' />

//     </form>
//     <div className="username">
//       <h2>{ (userName)? "hello" +(userName) : ''}</h2>
//     </div>
//   </div>
// );
// }

// export default App;

// main important actual code..................................................................................

// import logo from './logo.svg';
import "./App.css";
// import Nov21 from './Components/Nov21';
// import Nov22 from './Components/Nov22';
// import Nov18 from './Components/Nov18';
// import Nov17 from './Components/Nov17';

import Try from "./Components/Try";
import Nov1 from "./Components/Nov1";
// import Nov2 from './Components/Nov2';
// import Nov3 from './Components/Nov3';
// import Nov4 from './Components/Nov4';
// import Nov4b from './Components/Nov4b';
import Nov8 from "./Components/Nov8";
// import Nov9 from './Components/Nov9';
// import Nov10 from './Components/Nov10';
// import Nov11 from './Components/Nov11';
// import Nov14 from './Components/Nov14';
// import Nov15 from './Components/Nov15';
// import Nov16 from './Components/Nov16';

function App() {
  return (
    <div className="App">
      Hemant Sevada
      {/* <Try/> */}
      {/* <Nov1 name="Hemant" /> */}
      {/* <Nov2 /> */}
      {/* <Nov3 /> */}
      {/* <Nov4 />  */}
      {/* <Nov4b /> */}
      <Nov8 fName="kunal" />
      {/* <Nov9/> */}
      {/* <Nov10/> */}
      {/* <Nov11/> */}
      {/* <Nov14/> */}
      {/* <Nov15/> */}
      {/* <Nov16 /> */}
      {/* <Nov17 /> */}
      {/* <Nov18 /> */}
      {/* <Nov21/> */}
      {/* <Nov22/> */}
    </div>
  );
}

export default App;
