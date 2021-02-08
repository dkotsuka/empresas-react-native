import { ACTION_EXPIRED_SESSION, ACTION_LOGIN_ERROR, ACTION_TYPE_LOGIN, ACTION_TYPE_LOGOUT } from "./auth-actions"

export type UserState = {
    token: string | null
    client: string | null
    uid: string | null
    message?: string
}

const initialState = {
    token: null,
    client: null,
    uid: null,
}

export function authReducer(state: UserState = initialState, action: any) {
    switch (action.type) {
        case ACTION_TYPE_LOGIN:
            return {
                token: action.token,
                client: action.client,
                uid: action.uid,
            }
        case ACTION_EXPIRED_SESSION:
            return {
                ...initialState,
                message: "Sua sessão expirou. Por favor, faça o login novamente."
            }
        case ACTION_LOGIN_ERROR:
            return {
                ...initialState,
                message: "Ocorreu um erro. Por favor, tente novamente."
            }
        case ACTION_TYPE_LOGOUT:
            return initialState
        default:
          return state
    }
}

