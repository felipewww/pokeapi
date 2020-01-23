<template>
  <div class="home-results h-100">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <h6 class="title">Todos os Pokémons</h6>
        </div>
        <div class="col-md-3">
          <input class="form-control" placeholder="Filtrar" @keypress.enter="filter" v-model="filterText">
        </div>
      </div>

      <div class="row history-list">
        <div class="col-12">
          <div v-for="(poke, idx) in all"
               @click="search(poke)"
               v-show="!filterActive || belongsToFilter(idx)"
               :key="idx"
               class="history-list-item">
            <div class="info">
              <div class="text-oxygen poke-name">{{ poke.name }}</div>
            </div>

            <ShortStats :xp="poke.xp" :weight="poke.weight"></ShortStats>

            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShortStats from '../Common/ShortStats'
import PokemonService from '../../services/PokemonService';
import Levenshtein from '../../utils/Levenshtein';

export default {
  name: 'SearchHistory',
  components: { ShortStats },
  data () {
    return {
      levenshtein: null,
      all: [],
      filterActive: false,
      filterText: '',
      filterIndexes: [],
    }
  },
  mounted () {
    const service = new PokemonService();
    this.levenshtein = new Levenshtein();
    service.all()
      .then(res => {
        this.all = res.data.results;
        this.levenshtein.setRootObject(this.all);
      })
      .catch(error => {
        console.log(error);
        alert('falha ao consultar POKEAPI. Recarregue a tela e tente novamente')
      })
  },
  methods: {
    search (pokeBasic) {
      this.$root.$emit('searchFromList', pokeBasic)
      this.$root.$once('pokemonFound', (pokemonInstance) => {
        this.$set(pokeBasic, 'xp', pokemonInstance.xp);
        this.$set(pokeBasic, 'weight', pokemonInstance.weight);
      })
    },

    filter () {
      if (this.filterText.length >= 3) {
        this.filterIndexes = this.levenshtein.findIndexes(this.filterText);
        this.$nextTick(() => {
          this.filterActive = true;
        })
      } else {
        this.filterActive = false;
      }
    },

    belongsToFilter (idx) {
      return (this.filterIndexes.indexOf(idx) >= 0)
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-results {
    padding-top: 45px;
  }

  h6.title {
    line-height: 40px;
  }

  .history-list {
    padding-top: 45px;
  }

  .history-list-item {
    border: 1px solid #e4e4e4;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 15px;

    .sprite {
      width: 50px;
      height: 50px;
      background-position: 50%;
      float: left;
      margin-right: 25px;
    }

    .info {
      float: left;
      .poke-name {
        font-weight: bold;
      }
    }

    .poke-stats {
      float: right;
    }

    .found-at {
      font-size: 12px;
      color: gray;
    }
  }
</style>
