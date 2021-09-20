const USER = "usr"
const LAST_LOGGED_USER = "lLoggedUsr"
const path ={ path: '/' };

export const writeCookie = (cookie, data) => {
    cookie.set(LAST_LOGGED_USER ,data,path) // saved last logged user
    return cookie.set(USER, data,path)
}

export const readCookie = (cookie) => {
    return cookie.get(USER)
}

export const readCookieLastLoggedUser = (cookie) => {
    return cookie.get(LAST_LOGGED_USER)
}

export const deleteCookie = (cookie) => {
    return cookie.remove(USER)
}