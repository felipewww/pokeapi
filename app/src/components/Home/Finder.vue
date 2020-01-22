<template>
  <div class="finder h-100">
    <div class="wallpaper"></div>
    <div class="overlay"></div>

    <div class="container h-100">
      <img class="logo" alt="logo" src="../../assets/images/logo.svg">
      <div class="row">
        <div class="col-sm-12 offset-md-3 col-md-6">
          <input id="search" type="text" placeholder="Procure seu pokémon">
          <div class="search-button">
            <font-awesome-icon icon="search"></font-awesome-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch)

export default {
  name: 'Finder'
}
</script>

<style lang="scss" scoped>
  img.logo {
    margin: 0 auto;
    display: block;
  }

  .finder {
    .wallpaper, .overlay {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
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
      padding-top: 25vh;
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
    top: 3px;
    background: red;
    color: #fff;
    width: 50px;
    border-radius: 50px;
    text-align: center;
    padding: 14px;
  }
</style>
