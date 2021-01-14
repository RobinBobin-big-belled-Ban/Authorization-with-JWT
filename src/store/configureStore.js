import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers/combineReducers'
//import logger from 'redux-logger'
import thunk from 'redux-thunk'

/*const ping = store => next => action => {

	return next(action)
}*/

export const store = createStore(rootReducer, applyMiddleware(thunk))


