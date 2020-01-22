<template>
  <div class="poke-stats">
    <div>
      <font-awesome-icon class="gold" icon="star"></font-awesome-icon> 64
    </div>
    <div>
      <font-awesome-icon icon="weight-hanging"></font-awesome-icon> 69
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faWeightHanging } from '@fortawesome/free-solid-svg-icons'
library.add(faStar, faWeightHanging)

export default {
  name: 'ShortStats'
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
