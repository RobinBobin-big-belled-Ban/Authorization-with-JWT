import { CHANGE_HANDLER, SIGN_IN_HANDLER } from '../actions/sendRequestAction'


const initialState = {
	emailSign: "",
	passwordSign: "",
	emailReg: "",
	passwordReg: "",
	name: "",
	surname: "",
	phone: "",
}


export const initializerReducer = (state = initialState, action) => {
	switch(action.type) {
		case CHANGE_HANDLER:
			return {...state, [action.name]: action.value}
		default:
			return state
  	}
}

const initialStateSignIn = {
	user: undefined,
}

export const signInReducer  = (state = initialStateSignIn, action) => {
	switch(action.type) {
		case SIGN_IN_HANDLER:
			return {...state, user: action.obj}
		default:
			return state
  	}
}

