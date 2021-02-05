export const ACTION_TYPE_LOGIN = "ACTION_TYPE_LOGIN"
export const ACTION_TYPE_LOGOUT = "ACTION_TYPE_LOGOUT"

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