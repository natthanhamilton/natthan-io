import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {persistStore, persistCombineReducers} from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import storage from 'redux-persist/lib/storage'
import promiseMiddleware from 'redux-promise-middleware';
import {loadingBarReducer, loadingBarMiddleware} from 'react-redux-loading-bar'

import portfolioReducer from './redux/reducers'

const config = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
  debug: true
}
const reducer = persistCombineReducers(config, {
  portfolio: portfolioReducer,
  loadingBar: loadingBarReducer
})

// Un-persisted store for testing purposes
export const JestStore = createStore(combineReducers({
  portfolio: portfolioReducer
}), compose(applyMiddleware(thunk)))

// Persisted Store
export const store = createStore(reducer, undefined, compose(applyMiddleware(thunk, promiseMiddleware(), loadingBarMiddleware())))

// Persister for app.jsx
export const persister = persistStore(store)
