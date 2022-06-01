import React from 'react'

function Login(props) {
  return (
    <div className = "container card p-3 mt-2 login-container"> 
        <h1 className="text-center">Login Form</h1>

        <form onSubmit = {props.submit}>
            <div className="form-group">
                <label htmlFor = "email" >Email:</label>
                <input type = "email" name = "email" required className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor = "password" >Password:</label>
                <input type = "password" name = "password" required className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button> 
        </form>


        </div>
  )
}

export default Login;