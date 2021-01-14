import React from 'react'


const Input = props => {
	return(
		<div className="form-group">
            <label htmlFor="exampleInputPassword1">{props.text}</label>
            <input 
	              onChange={props.changeHandler}
	              name={props.name}
	              value={props.value}
	              type={props.type}   
	              className="form-control" 
	              placeholder={props.placeholder}
            />
        </div>
	)
}

export default Input