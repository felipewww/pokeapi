<template>
  <div class="poke-stats">
    <div>
      <font-awesome-icon class="gold" icon="star"></font-awesome-icon> {{ xp }}
    </div>
    <div>
      <font-awesome-icon icon="weight-hanging"></font-awesome-icon> {{ weight }}
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faWeightHanging } from '@fortawesome/free-solid-svg-icons'
library.add(faStar, faWeightHanging)

export default {
  name: 'ShortStats',
  props: ['weight', 'xp']
}
</script>

<style lang="scss" scoped>
.poke-stats {
  float: left;
  margin-top: 5px;
  margin-left: 20px;
}

.poke-stats svg {
  width: 20px !important;
}

.gold{
  color: goldenrod;
}
</style>
