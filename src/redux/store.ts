import { createStore, applyMiddleware } from 'redux'
import { logger, crashReporter } from './middleware'
import rootReducer from './reducers'

export const store = createStore(rootReducer, applyMiddleware(logger, crashReporter))
