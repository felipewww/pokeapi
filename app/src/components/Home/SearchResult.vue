<template>
  <div class="container-fluid search-result">
    <div class="container">
      <div class="search-result-card">
        <div class="poke-basic-info">
          <div class="text-bangers poke-name">Bulbasauro</div>
          <ShortStats></ShortStats>

          <div class="clearfix"></div>
        </div>

        <div class="row">

          <div class="col-md-2 col-sm-12 sprites">

            <div class="row">
              <div class="col-6 sprite-item" :style="{ backgroundImage: 'url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png)'}"></div>
              <div class="col-6 sprite-item" :style="{ backgroundImage: 'url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png)'}"></div>
            </div>

            <div class="row">
              <div class="col-6 sprite-item" :style="{ backgroundImage: 'url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png)'}"></div>
              <div class="col-6 sprite-item" :style="{ backgroundImage: 'url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png)'}"></div>
            </div>

          </div>

          <div class="col-10 stats-col">

            <div class="text-bangers">Stats</div>

            <div class="row stats-list">
              <div class="col-6">
                <div class="stat">
                  <span class="value">32</span>
                  <span class="name">Speed</span>
                </div>

                <div class="stat">
                  <span class="value">32</span>
                  <span class="name">special-attack</span>
                </div>

                <div class="stat">
                  <span class="value">32</span>
                  <span class="name">attack</span>
                </div>
              </div>
              <div class="col-6">
                <div class="stat">
                  <span class="value">32</span>
                  <span class="name">hp</span>
                </div>
                <div class="stat">
                  <span class="value">32</span>
                  <span class="name">special-defense</span>
                </div>
                <div class="stat">
                  <span class="value">32</span>
                  <span class="name">defense</span>
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
  components: { ShortStats }
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
