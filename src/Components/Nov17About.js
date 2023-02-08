import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nov17Header from './Nov17Header'

export default function Nov17About() {
  const navigate = useNavigate();
  
  const goToContact = ()=>{
    navigate('/contact');
    // navigate('./contact/child2');
    // navigate(-1);  // this -1 will take us to previous page
  }
  return (
    <div>
        <Nov17Header/>
      Showing avout componenet
      <button onClick={()=>{goToContact()}}>Link to Contact Page</button>
    </div>
  )
}
