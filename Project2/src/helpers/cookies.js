// Get a cookie value by name
function getCookie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Set a cookie
function setCookie(name, value, days = 365) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
}

// Increment cookie value by name
function incrementCookie(name, days = 365) {
    let value = parseInt(getCookie(name)) || 0;
    value++;
    setCookie(name, value, days);
}

// Get statistic value by name
function getStat(name) {
    let value = parseInt(getCookie(name)) || 0;
    return value
}