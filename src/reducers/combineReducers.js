import { combineReducers } from 'redux'
import { initializerReducer, signInReducer } from './initialDatesReducer'


export const rootReducer = combineReducers({
	init: initializerReducer,
	signIn: signInReducer,
})