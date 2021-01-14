import React from 'react'
import {
  //BrowserRouter as Router,
  //Switch,
  //Route,
  Link,
  //useParams,
  //useRouteMatch
} from "react-router-dom"


const Header = props => {
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <a className="navbar-brand">Token-Based Authentication</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarText">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item active">
		        <Link to="/" className="nav-link">Home</Link>
		      </li>
		      <li className="nav-item active">
		        <Link to="/auth" className="nav-link">Sign in</Link>
		      </li>
		      <li className="nav-item">
		        <Link to="/reg" className="nav-link">Create new account</Link>
		      </li>
		    </ul>
		  </div>
		</nav>
	)
}

export default Header