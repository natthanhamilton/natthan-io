import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import {
  persistStore,
  persistReducer
} from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import storage from 'redux-persist/lib/storage'
import promiseMiddleware from 'redux-promise-middleware';

import userReducer from './redux/reducers'

const config = {
  key: 'root',
  storage,
  stateReconciler: hardSet
}

const rootReducer = combineReducers( {
  user: userReducer
} )

const persistedReducer = persistReducer( config, rootReducer )

// Un-persisted store for testing purposes
export const JestStore = createStore( combineReducers( {
  user: userReducer
} ), compose( applyMiddleware( thunk ) ) )

// Persisted Store
const store = createStore( persistedReducer, undefined, compose( applyMiddleware( thunk, promiseMiddleware() ) ) )

const persistor = persistStore( store )

export {
  persistor,
  store
};

export default () => {
  return {
    store,
    persistor
  }
}