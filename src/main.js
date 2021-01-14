import React from 'react'
import Form from './form'
import Reg from './registrate'
import Home from './components/home'
import { getJwt } from './helpers/jwt'
import { 
	useHistory,
	Switch,
	Route,
 } from "react-router-dom"

const Main = props => {
	const history = useHistory()
	const jwt = getJwt()
	if (jwt) {
		return(
			<div>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/auth">
					<Home />
				</Route>
				<Route path="/reg">
					<Reg 
						changeHandler={props.changeHandler} 
						init={props.init}
					/>
				</Route>
			</Switch>
		</div>	
		)
		
	} 
	//if (jwt) history.push("/")
	return(
		<div>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/auth">
					<Form 
						changeHandler={props.changeHandler}
						init={props.init}
					/>
				</Route>
				<Route path="/reg">
					<Reg 	
						changeHandler={props.changeHandler} 
						init={props.init}
					/>
				</Route>
			</Switch>	
		</div>
	)
}


export default Main