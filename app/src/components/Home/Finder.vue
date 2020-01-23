<template>
  <div class="finder h-25 container-fluid">
    <div class="wallpaper"></div>
    <div class="overlay"></div>

    <div class="container">
        <img class="logo" alt="logo" src="../../assets/images/logo.svg">
      <div class="col-sm-12 offset-md-3 col-md-6">-->
        <input @keypress.enter="search" id="search" type="text" placeholder="Pesquisa por nome ou ID" v-model="searchValue">
        <div class="search-button" @click="search">
          <font-awesome-icon icon="search"></font-awesome-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Pokemon from '../../mixins/Pokemon'
import PokemonService from '../../services/PokemonService'
library.add(faSearch)

export default {
  name: 'Finder',
  data () {
    return {
      searchValue: '',
    }
  },

  mounted () {
    this.$root.$once('searchFromList', this.searchFromList)
  },

  methods: {
    /**
     * Recursividade para evitar propagation de evento
     * @param pokeBasic
     */
    searchFromList (pokeBasic) {
      this.searchValue = pokeBasic.name;
      this.search();
      this.$root.$once('searchFromList', this.searchFromList)
    },

    search () {
      const service = new PokemonService();

      service.get(this.searchValue)
        .then(res => {
          this.$root.$emit('pokemonFound', new Pokemon(res.data));
        })
        .catch(err => {
          this.$root.$emit('searchError', err);
          console.log(err);
          alert(`Erro inesperado ao procurar pelo pokemon ${this.searchValue}`);
        })
        .finally(() => {
          this.searchValue = '';
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  img.logo {
    margin: 0 auto;
    display: block;
    margin-bottom: 15px;
  }

  .finder {
    .wallpaper, .overlay {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 25%;
    }

    .wallpaper {
      background-image: url(../../assets/images/bg.jpg);
      background-size: cover;
      background-position: 50%;
    }

    .overlay {
      background-color: rgba(0,0,0,0.90);
    }

    .container {
      position: relative;
    }
  }

  input#search {
    border: 0;
    border-radius: 100px;
    text-align: center;
    padding: 17px 40px;
    width: 100%;
    margin: 0 auto;
    display: block;
    outline: none;
    color: #000;
    background: #fff;
  }

  .search-button {
    position: absolute;
    right: 23px;
    top: 27px;
    background: red;
    color: #fff;
    width: 50px;
    border-radius: 50px;
    text-align: center;
    padding: 14px;
  }
</style>
