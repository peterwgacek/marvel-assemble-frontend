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

// Grabs token from local storage and parses through the JSON and pulls out the payload, check the expiration date before returning token
function getToken() {
    let token = localStorage.getItem('token');
    // check if we have the token
    if (token) {
        // extract the payload
        const payload = JSON.parse(atob(token.split('.')[1]))
        // check the expiration date
        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem('token');
            token = null;
        }
    }
    //if all good, return the token to the next function
    return token
}

// Call the getToken variable
function getUserFromToken() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}


export {
    setToken,
    removeToken,
    getToken,
    getUserFromToken
}