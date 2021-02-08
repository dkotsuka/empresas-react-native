export const ACTION_TYPE_LOGIN = "ACTION_TYPE_LOGIN"
export const ACTION_TYPE_LOGOUT = "ACTION_TYPE_LOGOUT"
export const ACTION_LOGIN_ERROR = "ACTION_LOGIN_ERROR"
export const ACTION_EXPIRED_SESSION = "ACTION_EXPIRED_SESSION"

export function actionLogin(token: string, client: string, uid: string) {
    return {
        type: ACTION_TYPE_LOGIN,
        token,
        client,
        uid
    }
}

export function actionLogout() {
    return {
        type: ACTION_TYPE_LOGOUT
    }
}

export function actionLoginError() {
    return {
        type: ACTION_LOGIN_ERROR
    }
}

export function actionExpiredSession() {
    return {
        type: ACTION_EXPIRED_SESSION
    }
}