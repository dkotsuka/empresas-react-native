import { combineReducers, createStore } from 'redux'
import { authReducer, UserState } from '../reducers/auth-reducer'

export interface AppReduxState {
    user: UserState
}

const reducers = combineReducers({
    user: authReducer
})

export const store = createStore(reducers)