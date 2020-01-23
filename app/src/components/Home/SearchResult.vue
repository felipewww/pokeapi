<template>
  <div v-if="showing" class="container-fluid search-result">
    <div class="container">
      <div class="search-result-card">
        <div class="poke-basic-info">
          <div class="text-bangers poke-name">{{ pokemon.name }}</div>
          <ShortStats :weight="pokemon.weight" :xp="pokemon.xp"></ShortStats>

          <div class="clearfix"></div>
        </div>

        <div class="row">

          <div class="col-md-2 col-sm-12 sprites">

            <div class="row">
              <div class="col-6 sprite-item" :style="spriteAsBackgroundImage(pokemon.sprites.default.front)"></div>
              <div class="col-6 sprite-item" :style="spriteAsBackgroundImage(pokemon.sprites.default.back)"></div>
            </div>

            <div class="row">
              <div class="col-6 sprite-item" :style="spriteAsBackgroundImage(pokemon.sprites.shiny.front)"></div>
              <div class="col-6 sprite-item" :style="spriteAsBackgroundImage(pokemon.sprites.shiny.back)"></div>
            </div>

          </div>

          <div class="col-10 stats-col">

            <div class="text-bangers">Stats</div>

            <div class="row stats-list">
              <div class="col-12">
                <div v-for="(stat, idx) in pokemon.stats" :key="idx" class="stat col-6">
                  <span class="value">{{ stat.value }}</span>
                  <span class="name">{{ stat.title }}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShortStats from '../Common/ShortStats'

export default {
  name: 'SearchResult',
  components: { ShortStats },
  data () {
    return {
      showing: false,
      pokemon: {},
    }
  },
  mounted () {
    this.$root.$on('pokemonFound', this.showResult);

    this.$root.$on('searchError', () => {
      this.showing = false;
    })
  },
  methods: {
    spriteAsBackgroundImage (src) {
      return {
        backgroundImage: `url(${src})`
      }
    },

    showResult (pokemon) {
      this.pokemon = pokemon;
      this.showing = true;
      this.$el.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
}
</script>

<style lang="scss" scoped>
  .container-fluid.search-result {
    background: #e4e4e4;
  }

  .search-result-card {
    padding: 25px 0;
  }

  .poke-name {
    float: left;
    font-size: 40px;
  }

  .sprites .sprite-item {
    text-align: center;
    width: 96px;
    height: 96px;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  .stats-col {
    padding-top: 15px;
  }

  .stats-list {
    margin-top: 15px;
  }

  .stat {
    margin-bottom: 15px;
    float: left;

    .value{
      color: #484747;
      background: #d2d2d2;
      padding: 5px 7px;
      border-radius: 5px;
      font-size: 14px;
      font-weight: bold;
      margin-right: 10px;
    }

    .name {
      color: gray;
      font-size: 14px;
    }
  }
</style>
