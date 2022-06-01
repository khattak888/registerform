import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import Welcome from './Components/Welcome';




 class App extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        isLoggedIn : false,
        email : null,
        password : null,
     }
   }
 loginHandler = (event) => {
  const email = event.target.email.value;
  const password = event.target.password.value;
  this.setState({ email, password, isLoggedIn:true});
  event.preventDefault();  
 }

  render() {


    return (

      <div>
        
        {
          this.state.isLoggedIn ?
          <Welcome  name={this.state.name}
          email =  {this.state.email}></Welcome>
          :
          <Login submit = {this.loginHandler}></Login>
        }
        
        </div>
    )
  }
}
export default App; 