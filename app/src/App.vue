<template>
  <div id="app" class="h-100">
      <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Bangers&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Oxygen&display=swap');

  html, body {
    height: 100%;
  }

  .text-bangers {
    font-family: 'Bangers', cursive;
  }

  .text-oxygen {
    font-family: 'Oxygen', sans-serif;
  }
</style>
