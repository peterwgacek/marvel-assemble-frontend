const BASE_URI = 'https://gateway.marvel.com/v1/public';

export function getHeroes(name) {
    return fetch(`${BASE_URI}/characters?name=${name}&apikey=e7b12cf757030bbeb7dbbaa7b1ab708e`).then(res => res.json());
}