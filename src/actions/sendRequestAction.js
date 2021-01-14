export const CHANGE_HANDLER = "CHANGE_HANDLER"
export const SIGN_IN_HANDLER = "SIGN_IN_HANDLER"


export const onChangeHandler = (name, value) => {
	return {
		type: "CHANGE_HANDLER",
		name, 
		value,
	}
} 

export const onSignInHandler = obj => {
	return {
		type: "SIGN_IN_HANDLER",
		obj
	}
}