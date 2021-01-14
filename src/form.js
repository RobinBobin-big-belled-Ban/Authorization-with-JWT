import React from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom"

const Form = props => {
	const history = useHistory()
	function getToken(event) {
		event.preventDefault()
		axios.post(" http://erp.apptrix.ru/api/clients/token/", {
			username: props.init.emailSign,
			password: props.init.passwordSign,
		})
			.then(response => {
				localStorage.setItem("jwt-refresh", response.data.refresh)
				localStorage.setItem("jwt-access", response.data.access)
				localStorage.setItem("jwt-client_id", response.data.client_id)
				localStorage.setItem("jwt-username", response.data.username)
				history.push('/')
			})
			.catch(err => console.log(err))
	}

	return(
		<form>
		  <h3>auth form</h3>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input 
              onChange={props.changeHandler}
              name="emailSign"
              value={props.init.emailSign}
              type="email" 
              className="form-control" 
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input 
              onChange={props.changeHandler}
              name="passwordSign"
              value={props.init.passwordSign}
              type="password"   
              className="form-control" 
              placeholder="Password"
            />
          </div>
          <button 
          	  onClick={getToken}
              className="btn btn-primary">
                Sign in
          </button>
        </form>
	)
}



export default Form