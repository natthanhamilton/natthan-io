import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {REHYDRATE, PURGE, persistStore, persistCombineReducers} from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import storage from 'redux-persist/lib/storage'
import promiseMiddleware from 'redux-promise-middleware';

import authReducer from './redux/authReducer'
import {loadingBarReducer, loadingBarMiddleware} from 'react-redux-loading-bar'

const config = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
  debug: true
}
const reducer = persistCombineReducers(config, {
  user: authReducer,
  loadingBar: loadingBarReducer
})

export default() => {
  let store = createStore(reducer, undefined, compose(applyMiddleware(thunk, promiseMiddleware(), loadingBarMiddleware())))
  let persistor = persistStore(store)

  if (module.hot) {
    module.hot.accept(() => {
      // This fetch the new state of the above reducers.
      const nextRootReducer = require('./path/to/reducer')
      store.replaceReducer(persistReducer(config, nextRootReducer))
    })
  }

  return {store, persistor}
}
