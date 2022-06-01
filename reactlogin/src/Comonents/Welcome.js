import React from 'react'

 function Welcome(props) {


  return (

    <div>
        <h3>{props.name}</h3> 
    <h1>Welcome to stella technology</h1>
    <h3>verification send to your {props.email}</h3>
        
        
        </div>
  )
}  
export default Welcome;