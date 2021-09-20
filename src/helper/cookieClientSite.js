const CLIENT = "client"
const SITE = "site"
const CLIENT_ML = "clientML"
const SITE_ML = "siteML"
const path = { path: '/' };

export const writeSiteCookie = (cookie, data) => {
    cookie.set(SITE_ML, data.mlSelectedSite, path);
    return cookie.set(SITE, data.selectedSite, path)
}

export const readSiteCookie = (cookie) => {
    return cookie.get(SITE)
}

export const deleteSiteCookie = (cookie) => {
    return cookie.remove(SITE)
}



export const checkImage = (imageUrl, cb) => {
    let blob = null;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', imageUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
        blob = xhr.response;
        let logoUrl = blob.size != 0
        cb(logoUrl)
    }
    xhr.send(true)
}