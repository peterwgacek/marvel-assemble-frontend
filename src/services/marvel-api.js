const BASE_URI = 'https://gateway.marvel.com/v1/public';

export function getHeroes() {
    return fetch(BASE_URI + '/characters?ts=1&apikey=e7b12cf757030bbeb7dbbaa7b1ab708e&hash=c51d7a7672a112cff6de4b7b0f931874').then(res => res.json());
}