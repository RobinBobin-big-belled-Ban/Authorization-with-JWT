import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { onChangeHandler, onSignInHandler } from '../actions/sendRequestAction'
import { getJwt } from '../helpers/jwt'
import { withRouter } from 'react-router-dom'



class Home extends React.Component {
	componentDidMount() {
		const jwt = getJwt()
		const clientId = localStorage.getItem("jwt-client_id")
		if (!jwt) {
			this.props.history.push("/auth")
		}
		axios.get(`http://erp.apptrix.ru/api/clients/${clientId}/`, {
			headers: { Authorization: `Bearer ${jwt}`}
		})
			.then(response => this.props.signInHandler(response.data))
			.catch(err => {
					this.props.history.push("/auth")
					if (err.message.match(/401/)) {
						const regExp = err.message.match(/401/)
						if (regExp[0] === "401") {
							axios.post("http://erp.apptrix.ru/api/clients/token/refresh/", {
								refresh: localStorage.getItem("jwt-refresh")
							})
							.then(response => localStorage.setItem("jwt-access",response.data.access))
							.catch(err => {
								this.props.history.push("/auth")
								localStorage.clear()
							})
					}
				}
			})
	}
	render() {
		const user = this.props.signIn.user
		if (!(user === undefined)){
			return(
				<div>
					<h2>User information </h2>
					<ul className="list-group">
						<li className="list-group-item">Name: {user.name}</li>
						<li className="list-group-item">Surname: {user.surname}</li>
						<li className="list-group-item">Phone: {user.phone}</li>
						<li className="list-group-item">E-mail: {user.email}</li>
					</ul>
				</div>
			)
		}
		if (user === undefined) {
			
			return(
				<h2>You need to sign In</h2>
			)
		}
		
	}
}



const mapStateToProps = store => {
  return {
    init: store.init,
    signIn: store.signIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeHandler: (name, value) => dispatch(onChangeHandler(name, value)),
    signInHandler: obj => dispatch(onSignInHandler(obj)),
    
  }
}


const NewHome = withRouter(Home)

export default connect(mapStateToProps, mapDispatchToProps)(NewHome);