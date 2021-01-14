import React from 'react'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import Input from './components/input'


const Reg = props => {
	const history = useHistory()

	function sendRequestForSignIn(event) {
		event.preventDefault()
		const phone = "+" + props.init.phone
	    axios.post('http://erp.apptrix.ru/api/clients/create/', {
	      user: {
	        email: props.init.emailReg,
	        password: props.init.passwordReg,
	      },
	      invited_by: "RU-637164",
	      name: props.init.name,
	      surname: props.init.surname,
	      country_key: "RU",
	      phone: phone, 
	    })
	      .then(response => {
	        alert("РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО")
	        history.push("/auth")
	      })
	      .catch(err => console.log(err.message))
 	}


	return(
		<form>
		  	<h3>reg form</h3>
		  	<Input 
			  	changeHandler={props.changeHandler} 
			  	name="phone"
			  	type="number" 
			  	placeholder="Enter phone +7(...) ..-..-..."
			  	init={props.init}
			  	text="Phone"
			  	value={props.init.phone}
		  	/>
		  	<Input 
			  	changeHandler={props.changeHandler} 
			  	name="surname"
			  	type="text" 
			  	placeholder="Enter surname"
			  	init={props.init}
			  	text="Surname"
			  	value={props.init.surname}
		  	/>
		  	<Input 
			  	changeHandler={props.changeHandler} 
			  	name="name"
			  	type="text" 
			  	placeholder="Enter name"
			  	init={props.init}
			  	text="Name"
			  	value={props.init.name}
		  	/>
		    <Input 
			  	changeHandler={props.changeHandler} 
			  	name="emailReg"
			  	type="email" 
			  	placeholder="Enter email"
			  	init={props.init}
			  	text="Email address"
			  	value={props.init.emailReg}
		  	/>
		  	<Input 
			  	changeHandler={props.changeHandler} 
			  	name="passwordReg"
			  	type="password" 
			  	placeholder="Password"
			  	init={props.init}
			  	text="Password"
			  	value={props.init.passwordReg}
		  	/>
          <button 
          	  onClick={sendRequestForSignIn}
              className="btn btn-primary">
                Sign Up
          </button>
        </form>
	)
}

export default Reg