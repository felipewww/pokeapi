import axios from 'axios'

export default function PokemonService () {
  this.url = 'https://pokeapi.co/api/v2/pokemon/';

  this.get = (name) => {
    return axios.get(this.url + name)
  };

  this.all = () => {
    return axios.get(this.url + '?offset=0&limit=964')
  };

  return this
}
