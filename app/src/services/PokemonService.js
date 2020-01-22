import axios from 'axios'

export default function PokemonService () {
  this.url = 'https://pokeapi.co/api/v2/pokemon/';

  this.get = (name) => {
    return axios.get(this.url + name)
  };

  return this
}
