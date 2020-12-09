function setToken(token) {
    if (token) {
        localStorage.setItem('token', token);
    } else {
        localStorage.removeItem('token');
    }
}

function removeToken() {
    localStorage.removeItem('token');
}

function getToken() {

}

function getUserFromToken() {

}


export {
    setToken,
    removeToken,
    getToken,
    getUserFromToken
}