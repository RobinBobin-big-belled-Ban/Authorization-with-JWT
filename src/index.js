import 'bootstrap/dist/css/bootstrap.min.css'
//import $ from 'jquery'
//import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
//добавил Бутстрап и jQerry и popper npm install jquery popper.js 
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux' 
import { store } from './store/configureStore' 
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from "react-router-dom"


ReactDOM.render(
	<Router>
		<Provider store={store}>
    		<App />
    	</Provider>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
