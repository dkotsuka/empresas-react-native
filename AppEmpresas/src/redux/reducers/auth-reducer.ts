import { ACTION_TYPE_LOGIN, ACTION_TYPE_LOGOUT } from "./auth-actions"

const initialState = {
    token: null,
    client: null,
    uid: null
}

export function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case ACTION_TYPE_LOGIN:
            return {
                token: action.token,
                client: action.client,
                uid: action.uid,
            }
        case ACTION_TYPE_LOGOUT:
            return initialState
        default:
          return state
    }
}

