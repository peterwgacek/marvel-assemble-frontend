const BASE_URL = 'https://gateway.marvel.com:443/v1/public';

export function getPosters() {
    return fetch(BASE_URL + 'characters?apikey=e7b12cf757030bbeb7dbbaa7b1ab708e').then(res => res.json());
}