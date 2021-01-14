import React from 'react'
import Header from './header'
import Main from './main'
//import axios from 'axios'
import { connect } from 'react-redux'
import { onChangeHandler, onSignInHandler } from './actions/sendRequestAction'



class App extends React.Component {
 
  onChangeHandler(event) {
    const { name, value } = event.target
    this.props.changeHandler(name, value)
     //this.props.onAutentitication()
  }
  render() {
    return(
      <div>
        <Header />
        <Main 
          changeHandler={this.onChangeHandler.bind(this)} 
          init={this.props.init}
        />
      </div>
    )
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


export default connect(mapStateToProps, mapDispatchToProps)(App)



