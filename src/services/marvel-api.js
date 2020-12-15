import { marvelApiKey } from '../Token'
const BASE_URI = 'https://gateway.marvel.com/v1/public';

export function getHeroes(name) {
    return fetch(`${BASE_URI}/characters?name=${name}&apikey=${marvelApiKey}`).then(res => res.json());
}