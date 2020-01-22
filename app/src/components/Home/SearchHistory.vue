<template>
  <div class="home-results h-100">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <h6 class="title">Histórico de pesquisa</h6>
        </div>
        <div class="col-md-3">
          <input class="form-control" placeholder="Filtrar">
        </div>
      </div>

      <div class="row history-list">
        <div class="col-12">
          <div class="history-list-item">
            <div class="sprite" :style="{ backgroundImage: 'url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png)'}"></div>
            <div class="info">
              <div class="text-oxygen poke-name">Bulbasaur</div>
              <div class="text-oxygen found-at">Encontrado em: 20-12-2019</div>
            </div>

            <ShortStats></ShortStats>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShortStats from '../Common/ShortStats'

export default {
  name: 'SearchHistory',
  components: { ShortStats }
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
